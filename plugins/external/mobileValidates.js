/* eslint-disable */
// VietNamese REGEX phone number
const MOBILEREG = /(09|01[2|6|8|9])+([0-9]{8})\b/

export const MobileValidate = {
  message: field => `${field} is not a valid phone number`,
  validate(value, args) {
    // console.log(MOBILEREG.test(value), value)
    return MOBILEREG.test(value)
  }
}
