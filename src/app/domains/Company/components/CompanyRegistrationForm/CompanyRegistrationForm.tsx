import CompanyCredentialsForm, {
  CompanyCredentialsFormErrors,
  CompanyCredentialsFormProps
} from './components/CompanyCredentialsForm/CompanyCredentialsForm'
import CompanyDetailsForm, {
  CompanyDetailsFormErrors,
  CompanyDetailsFormProps
} from './components/CompanyDetailsForm/CompanyDetailsForm'

import CompanyRegistrationActions from './components/CompanyRegistrationActions/CompanyRegistrationActions'
import CompanyRegistrationHeader from './components/CompanyRegistrationHeader/CompanyRegistrationHeader'
import React from 'react'
import useWidgetContext from '../../../../contexts/Widget/useWidgetContext'

export interface CompanyRegistrationFormProps {
  t?: {
    companyDetailsForm?: CompanyDetailsFormProps['t']
    companyCredentialsForm?: CompanyCredentialsFormProps['t']
    companyCredentialsFormErrors?: CompanyCredentialsFormErrors
    companyDetailsFormErrors?: CompanyDetailsFormErrors
    title: string
    subtitle: string
    resetAction: string
    nextAction: string
    submitAction: string
  }
}

const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({
  t: {
    companyDetailsForm,
    companyCredentialsForm,
    companyCredentialsFormErrors,
    companyDetailsFormErrors,
    title,
    subtitle,
    nextAction,
    resetAction,
    submitAction
  } = {
    title: 'Register Your Company',
    subtitle: 'Create your business profile in just a few steps.',
    resetAction: 'Reset',
    nextAction: 'Next',
    submitAction: 'Register'
  }
}) => {
  const { isFirstStepCompleted } = useWidgetContext()

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CompanyRegistrationHeader title={title} subtitle={subtitle} />
        {isFirstStepCompleted ? (
          <CompanyCredentialsForm t={companyCredentialsForm} />
        ) : (
          <CompanyDetailsForm t={companyDetailsForm} />
        )}
      </div>
      <CompanyRegistrationActions
        t={{
          resetAction,
          submitAction,
          nextAction,
          companyCredentialsFormErrors,
          companyDetailsFormErrors
        }}
      />
    </div>
  )
}

export default CompanyRegistrationForm
