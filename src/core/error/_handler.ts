// YOU CAN CHANGE THE NOTIFIER PACKAGE LATER
import type { IHttpData } from '@/shared/types'
import { type AxiosError, isAxiosError } from 'axios'
import type { App } from 'vue'
import { useToast } from 'vue-toastification'
import { postErrorToStorage } from './_logger'

// DEFINE NOTIFIER WITH TOAST
const toast = useToast()

//
/**
 * @description CLIENT AXIOS ERROR HANDLER
 * @author ajisyahroni
 * @version 1.0.0
 * @param {import('axios').AxiosError} rawError
 * @param {Function} extendFn
 * @returns
 */
export const apiErrorHandler = (apiError: AxiosError<IHttpData<any>>) => {
  console.group('CATCH BY : apiErrorHandler')
  console.error('RAW ERROR : ', apiError)

  // handler fn
  if (!isAxiosError(apiError)) {
    toast.error('Kesalahan tidak dikenali')
    return Promise.reject(apiError)
  }

  if (apiError.code === 'ERR_NETWORK') {
    toast.error('Ada kesalahan koneksi')
  } else if (apiError.code === 'ERR_CANCELED') {
    toast.error('Mohon ulangi permintaan dibatalkan')
  }

  switch (apiError.response?.status) {
    case 400:
      console.warn()
      toast.error(apiError.response.data.message ?? 'Permintaan tidak valid')
      break

    case 401:
      toast.error(apiError.response.data.message ?? 'Sesi login anda telah berakhir')
      break

    case 404:
      toast.error(apiError.response.data.message ?? 'Permintaan yang anda cari tidak ada')
      break

    case 422:
      let message = null
      if (typeof apiError.response.data.errors == 'object') {
        message = Object.values(apiError.response.data.errors).join(',')
      }

      toast.error(message ?? 'Kesalahan Data yang dikirim')
      break

    case 429:
      toast.error(
        apiError.response.data.message ?? 'Permintaan data terlalu banyak, tunggu beberapa saat'
      )
      break

    case 500:
      toast.error(
        apiError.response.data.message ?? 'Terjadi kesalahan saat berkomunikasi dengan server'
      )
      break

    default:
      toast.error('Kode kesalahan tidak dikenali')
      break
  }

  console.groupEnd()
  return Promise.reject(apiError)
}

export class DefinedError extends Error {
  constructor(message: any) {
    super(message)
    this.name = 'DefinedError'
  }

  notify() {
    toast.error(this.message)
  }
}



/**
 * Handling error stack information
 * @param error
 */
function processStackMsg(error: Error) {
  if (!error.stack) {
    return '';
  }
  let stack = error.stack
    .replace(/\n/gi, '') // Remove line breaks to save the size of the transmitted content
    .replace(/\bat\b/gi, '@') // At in chrome, @ in ff
    .split('@') // Split information with @
    .slice(0, 9) // The maximum stack length (Error.stackTraceLimit = 10), so only take the first 10
    .map((v) => v.replace(/^\s*|\s*$/g, '')) // Remove extra spaces
    .join('~') // Manually add separators for later display
    .replace(/\?[^:]+/gi, ''); // Remove redundant parameters of js file links (?x=1 and the like)
  const msg = error.toString();
  if (stack.indexOf(msg) < 0) {
    stack = msg + '@' + stack;
  }
  return stack;
}


/**
 * get comp name
 * @param vm
 */
function formatComponentName(vm: any) {
  if (vm.$root === vm) {
    return {
      name: 'root',
      path: 'root',
    };
  }

  const options = vm.$options as any;
  if (!options) {
    return {
      name: 'anonymous',
      path: 'anonymous',
    };
  }
  const name = options.name || options._componentTag;
  return {
    name: name,
    path: options.__file,
  };
}


/**
 * Configure Vue error handling function
 */

function vueErrorHandler(err: any, vm: any, info: string) {

  const { name, path } = formatComponentName(vm);
  const payload = {
    type: 'ErrorTypeEnum.VUE',
    name,
    file: path,
    message: err.message,
    stack: processStackMsg(err),
    detail: info,
    url: window.location.href,
  }
  console.error(payload)
  postErrorToStorage(payload)
}



interface ErrorLogInfo {
  message?: any;
  stack?: any;
}

/**
 * Configure script error handling function
 */
export function scriptErrorHandler(
  event: Event | string,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error,
) {
  if (event === 'Script error.' && !source) {
    return false;
  }
  const errorInfo: Partial<ErrorLogInfo> = {};
  colno = colno || (window.event && (window.event as any).errorCharacter) || 0;
  errorInfo.message = event as string;
  if (error?.stack) {
    errorInfo.stack = error.stack;
  } else {
    errorInfo.stack = '';
  }
  const name = source ? source.substr(source.lastIndexOf('/') + 1) : 'script';
  const payload = {
    type: 'ErrorTypeEnum.SCRIPT',
    name: name,
    file: source as string,
    detail: 'lineno' + lineno,
    url: window.location.href,
    ...(errorInfo as Pick<ErrorLogInfo, 'message' | 'stack'>),
  }
  console.error(payload)
  postErrorToStorage(payload)
  return true;
}


/**
 * Configure Promise error handling function
 */
function registerPromiseErrorHandler() {
  window.addEventListener(
    'unhandledrejection',
    function (event) {
      const payload = {
        type: 'ErrorTypeEnum.PROMISE',
        name: 'Promise Error!',
        file: 'none',
        detail: 'promise error!',
        url: window.location.href,
        stack: 'promise error!',
        message: event.reason,
      }
      console.error(payload)
      postErrorToStorage(payload)
    },
    true,
  );
}


/**
 * Configure monitoring resource loading error handling function
 */
function registerResourceErrorHandler() {
  // Monitoring resource loading error(img,script,css,and jsonp)
  window.addEventListener(
    'error',
    function (e: Event) {
      const target = e.target ? e.target : (e.srcElement as any);
      const payload = {
        type: 'ErrorTypeEnum.RESOURCE',
        name: 'Resource Error!',
        file: (e.target || ({} as any)).currentSrc,
        detail: JSON.stringify({
          tagName: target.localName,
          html: target.outerHTML,
          type: e.type,
        }),
        url: window.location.href,
        stack: 'resource is not found',
        message: (e.target || ({} as any)).localName + ' is load error',
      }
      console.error(payload)
      postErrorToStorage(payload)
    },
    true,
  );
}

export function setupAppErrorHandler(app: App) {
  // Vue exception monitoring;
  app.config.errorHandler = (err, vm, info) => vueErrorHandler(err, vm, info);
  // script error
  window.onerror = scriptErrorHandler;
  //  promise exception
  registerPromiseErrorHandler();
  // Static resource exception
  registerResourceErrorHandler();
}
