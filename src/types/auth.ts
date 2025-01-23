export interface IRegistrationUrl {
  currencyCode: string,
  url: string
}


export interface IResRegister2FA {
  otpAuthUrl: string,
  provider: string,
  secret: string,
  step: string
}
