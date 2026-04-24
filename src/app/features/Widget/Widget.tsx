import initializeT, { WidgetTranslations } from './helpers/initializeT'

import CompanyRegistrationError from '../../domains/Company/components/CompanyRegistrationError/CompanyRegistrationError'
import CompanyRegistrationForm from '../CompanyRegistrationForm/CompanyRegistrationForm'
import CompanyRegistrationSuccess from '../../domains/Company/components/CompanyRegistrationSuccess/CompanyRegistrationSuccess'
import Loading from '../../components/Loading/Loading'
import React from 'react'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

export interface WidgetProps {
  t?: Partial<WidgetTranslations>
  isFreeTrial?: boolean
}

const Widget: React.FC<WidgetProps> = ({ t, isFreeTrial }) => {
  const {
    companyRegistrationForm,
    companyRegistrationSuccess,
    companyRegistrationError
  } = initializeT(t)

  const { submitState } = useWidgetContext()

  return (
    <div className="section-content">
      {submitState.success ? (
        <CompanyRegistrationSuccess t={companyRegistrationSuccess} />
      ) : submitState.error ? (
        <CompanyRegistrationError
          t={companyRegistrationError}
          errorType={submitState.errorType}
        />
      ) : submitState.isLoading ? (
        <Loading />
      ) : (
        <CompanyRegistrationForm
          t={companyRegistrationForm}
          isFreeTrial={isFreeTrial}
        />
      )}
    </div>
  )
}

export default Widget
