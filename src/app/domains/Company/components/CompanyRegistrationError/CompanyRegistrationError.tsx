import React from 'react'
import useWidgetContext from '../../../../contexts/Widget/useWidgetContext'

export interface ErrorMessage {
  userAlreadyExists: string
  unexpectedError: string
  companyAlreadyRegistered: string
}

export interface CompanyRegistrationErrorProps {
  t?: {
    title: string
    continueAction: string
    errorMessages?: ErrorMessage
  }
  errorType: string | null
}

const getErrorMessage = ({
  type,
  t = {
    userAlreadyExists: 'User already exists. Please try a different email.',
    unexpectedError: 'An unexpected error occurred. Please try again later.',
    companyAlreadyRegistered: 'This company is already registered.'
  }
}: {
  type: string | null
  t?: ErrorMessage
}) => {
  switch (type) {
    case 'auth/email-already-exists':
      return t.userAlreadyExists
    case 'company_already_exists':
      return t.companyAlreadyRegistered
    default:
      return t.unexpectedError
  }
}

const CompanyRegistrationError: React.FC<CompanyRegistrationErrorProps> = ({
  t: { title, errorMessages, continueAction } = {
    title: 'Company Registration Error',
    continueAction: 'Continue'
  },
  errorType
}) => {
  const { reset } = useWidgetContext()

  const message = getErrorMessage({ type: errorType, t: errorMessages })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <h1
        className="subtitle"
        style={{ textAlign: 'center', marginBottom: '12px' }}
      >
        {title}
      </h1>

      <span
        className="text"
        style={{ textAlign: 'center', marginBottom: '24px' }}
      >
        {message}
      </span>

      <button className="btn btn-primary" onClick={reset}>
        {continueAction}
      </button>
    </div>
  )
}

export default CompanyRegistrationError
