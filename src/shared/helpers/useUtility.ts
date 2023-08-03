/**
 * @description parse Number to IDR currency string
 * @param {Number} value
 * @param {Boolean} showSign
 * @returns
 */
export function toIDRformatUtil(value: number | any, showSign = true): string {
  if (typeof value === "number") {
    interface IOptions {
      currency: string;
      minimumFractionDigits: number;
      style?: string;
    }

    const option: IOptions = {
      currency: "IDR",
      minimumFractionDigits: 0,
    };
    if (showSign === true) option.style = "currency";
    return new Intl.NumberFormat("id-ID", option).format(value);
  } else return "Rp. -";
}

/**
 * @description open email tab
 * @param {String} email
 * @returns {void}
 */
export const shareEmailUtil = (email: string) =>
  window.open(`mailto:${email}`, "_blank");

/**
 * @description transform JSON object to FormData
 * @param {Object} object
 * @returns {FormData}
 */
export const jsonToFormUtil = (object: { [key: string]: any }) => {
  const bodyFormData = new FormData();
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element != null || element != undefined) {
        bodyFormData.append(key, element);
      }
    }
  }

  return bodyFormData;
};

/**
 * @description transform FormData to JSON object
 * @param {FormData} form
 * @returns {Object}
 */
export const formToJsonUtil = (form: any): Object => Object.fromEntries(form);

export function isValidURL(str: string) {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}

export const validationUtil = {
  isRequired: (d: any) => !!d,
  isNumberOnly: (d: any) => /^\d+$/.test(d),
  isEmail: (v: string) => /.+@.+\..+/.test(v),
  isIDPhone: (v: string) => /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/.test(v),
  isPhoneGlobal: (v: string) => /^(08)(\d{3,4}-?){2}\d{3,4}$/.test(v),
  isPercentInput: (d: any) => /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/.test(d),
  isMoneyInput: (d: string) => String(d).length >= 4 && !!d,
  isUrl: (d: string) => /(https?:\/\/[^\s]+)/.test(d),
};

// get first and last of this month 
export const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
export const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
