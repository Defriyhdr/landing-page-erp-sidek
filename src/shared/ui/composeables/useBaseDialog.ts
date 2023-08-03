interface IDialogProps {
  absolute?: boolean
  origin?: 'auto' | 'overlap'
  transition?: string | boolean
  zIndex?: string | number
  eager?: boolean
  disabled?: boolean
  modelValue?: boolean
  activatorProps?: Record<string, any>
  openOnHover?: boolean
  closeOnContentClick?: boolean
  locationStrategy?: 'connected' | 'static'
  closeOnBack?: boolean
  contained?: boolean
  noClickAnimation?: boolean
  persistent?: boolean
  offset?: string | number | number[] | undefined
  height?: string | number | undefined
  width?: string | number | undefined
  maxHeight?: string | number | undefined
  maxWidth?: string | number | undefined
  minHeight?: string | number | undefined
  minWidth?: string | number | undefined
  theme?: string | undefined
  contentClass?: any
  activator?: string | Element
  closeDelay?: string | number | undefined
  openDelay?: string | number | undefined
  openOnClick?: boolean | undefined
  openOnFocus?: boolean | undefined
  contentProps?: any
  attach?: string | boolean | Element | undefined
}

interface IComponentOptions {
  props?: { [key: string]: any }
  events?: { [key: string]: Function }
}

const [useProvideBaseDialog, useInjectBaseDialog] = createInjectionState(
  (initialValue: boolean) => {
    const dialog = shallowRef(initialValue)

    const _defaultDialogProps: IDialogProps = { maxWidth: 600 }
    const dialogProps = shallowRef<IDialogProps | undefined>(_defaultDialogProps)

    const component = shallowRef<Component | null>(null)
    const componentOptions = shallowRef<IComponentOptions | undefined>({})

    /**
     * @description digunakan untuk membuka dialog yang berisi sebuah komponen
     * @author ajisyahroni14@gmail.com
     * @param dialogComponent
     * @param CProps
     * @param DProps
     */
    function open(dialogComponent: Component, CProps?: IComponentOptions, DProps?: IDialogProps) {
      component.value = dialogComponent
      if (CProps) componentOptions.value = CProps
      if (DProps) dialogProps.value = DProps
      dialog.value = true
    }

    function hide() {
      component.value = null
      dialogProps.value = _defaultDialogProps
      dialog.value = false
    }

    const overlay = shallowRef(false)
    function showOverlay() {
      overlay.value = true;
    }
    function hideOverlay() {
      overlay.value = false
    }


    const confirmDialog = shallowRef(false)
    const resolve = shallowRef((value: any) => { })
    const reject = shallowRef((value: any) => { })
    const showConfirmDialog = () => {
      confirmDialog.value = true
      return new Promise((res: any, rej: any) => {
        resolve.value = res
        reject.value = rej
      })
    }
    const hideConfirmDialog = () => {
      resolve.value(false)
      confirmDialog.value = false
    }
    const onConfirm = () => {
      resolve.value(true)
      confirmDialog.value = false
    }

    return {
      dialog, open, hide, component, dialogProps, componentOptions,
      overlay, showOverlay, hideOverlay,
      confirmDialog, showConfirmDialog, hideConfirmDialog, onConfirm
    }
  }
)

export { useProvideBaseDialog }
export { useInjectBaseDialog }
