import { ErrorMessage } from '../interfaces'

const getErrorMessage = ({
  type,
  t
}: {
  type: string | null
  t: ErrorMessage
}): string[] => {
  switch (type) {
    case 'auth/email-already-exists':
      return t.userAlreadyExists
    case 'company_already_exists':
      return t.companyAlreadyRegistered
    case 'invalid_promo_code':
      return t.invalidPromoCode
    default:
      return t.unexpectedError
  }
}

export default getErrorMessage
