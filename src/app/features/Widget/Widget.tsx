import CompanyRegistrationForm, {
  CompanyRegistrationFormProps
} from '../../domains/Company/components/CompanyRegistrationForm/CompanyRegistrationForm'
import CompanyRegistrationSuccess, {
  CompanyRegistrationSuccessProps
} from '../../domains/Company/components/CompanyRegistrationSuccess/CompanyRegistrationSuccess'

import Loading from '../../components/Loading/Loading'
import React from 'react'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

export interface WidgetProps {
  t?: {
    companyRegistrationForm: CompanyRegistrationFormProps['t']
    companyRegistrationSuccess: CompanyRegistrationSuccessProps['t']
  }
}

const Widget: React.FC<WidgetProps> = ({
  t: { companyRegistrationForm, companyRegistrationSuccess } = {}
}) => {
  const { submitState } = useWidgetContext()

  return (
    <div className="section-content">
      {submitState.success ? (
        <CompanyRegistrationSuccess t={companyRegistrationSuccess} />
      ) : submitState.error ? (
        <>{/* TODO */}</>
      ) : submitState.isLoading ? (
        <Loading />
      ) : (
        <CompanyRegistrationForm t={companyRegistrationForm} />
      )}
    </div>
  )
}

export default Widget
