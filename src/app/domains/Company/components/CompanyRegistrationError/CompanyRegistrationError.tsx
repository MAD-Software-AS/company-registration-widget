import { CompanyRegistrationErrorProps } from './interfaces'
import React from 'react'
import getErrorMessage from './helpers/getErrorMessage'
import useWidgetContext from '../../../../contexts/Widget/useWidgetContext'

const CompanyRegistrationError: React.FC<CompanyRegistrationErrorProps> = ({
  t: { title, messages, continueAction },
  errorType
}) => {
  const { reset } = useWidgetContext()

  const _messages = getErrorMessage({ type: errorType, t: messages })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: '350px'
      }}
    >
      <h1 className="subtitle text-center" style={{ marginBottom: '24px' }}>
        {title}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {_messages.map((message, index) => (
          <span key={index} className="text text-center">
            {message}
          </span>
        ))}
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: '24px' }}
        onClick={reset}
      >
        {continueAction}
      </button>
    </div>
  )
}

export { CompanyRegistrationErrorProps }

export default CompanyRegistrationError
