import React from 'react'
import replaceVariablesInTranslations from '../../../../utils/replaceVariablesInTranslations'
import useWidgetContext from '../../../../contexts/Widget/useWidgetContext'

export interface CompanyRegistrationSuccessProps {
  t: {
    title: string
    messages: string[]
  }
}

const CompanyRegistrationSuccess: React.FC<CompanyRegistrationSuccessProps> = ({
  t: { title, messages }
}) => {
  const {
    formData: { email }
  } = useWidgetContext()

  const _messages = messages.map((message) => {
    return replaceVariablesInTranslations(message, {
      email: email || ''
    })
  })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        minHeight: '300px'
      }}
    >
      <h1 className="subtitle text-center" style={{ marginBottom: '12px' }}>
        {title}
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {_messages.map((message, index) => (
          <span key={index} className="text text-center">
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CompanyRegistrationSuccess
