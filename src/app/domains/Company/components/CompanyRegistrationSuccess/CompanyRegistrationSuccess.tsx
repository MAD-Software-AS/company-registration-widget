import React from 'react'
import useWidgetContext from '../../../../contexts/Widget/useWidgetContext'

export interface CompanyRegistrationSuccessProps {
  t?: {
    title: string
    message: string
    continueAction: string
  }
}

const CompanyRegistrationSuccess: React.FC<CompanyRegistrationSuccessProps> = ({
  t: { title, message, continueAction } = {
    title: 'Company Registration Success',
    message:
      'Your company has been successfully registered! Check your email for confirmation and access to your account.',
    continueAction: 'Continue'
  }
}) => {
  const { reset } = useWidgetContext()

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
        className="title-1"
        style={{ textAlign: 'center', marginBottom: '12px' }}
      >
        {title}
      </h1>

      <span
        className="subtitle"
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

export default CompanyRegistrationSuccess
