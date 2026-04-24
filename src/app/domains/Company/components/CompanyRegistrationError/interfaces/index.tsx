export interface ErrorMessage {
  userAlreadyExists: string[]
  unexpectedError: string[]
  companyAlreadyRegistered: string[]
  invalidPromoCode: string[]
}

export interface CompanyRegistrationErrorProps {
  t: {
    title: string
    continueAction: string
    messages: ErrorMessage
  }
  errorType: string | null
}
