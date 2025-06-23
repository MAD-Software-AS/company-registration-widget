import CompanyCredentialsForm, {
  CompanyCredentialsFormErrors,
  CompanyCredentialsFormProps
} from '../../domains/Company/components/CompanyCredentialsForm/CompanyCredentialsForm'
import CompanyDetailsForm, {
  CompanyDetailsFormErrors,
  CompanyDetailsFormProps
} from '../../domains/Company/components/CompanyDetailsForm/CompanyDetailsForm'
import PackageSelectForm, {
  PackageSelectFormProps
} from '../PackageSelectForm/PackageSelectForm'

import CompanyRegistrationActions from '../../domains/Company/components/CompanyRegistrationActions/CompanyRegistrationActions'
import CompanyRegistrationHeader from '../../domains/Company/components/CompanyRegistrationHeader/CompanyRegistrationHeader'
import React from 'react'
import { STEPS } from '../../contexts/Widget/WidgetContext'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

export interface CompanyRegistrationFormProps {
  t?: {
    packageSelectForm: PackageSelectFormProps['t']
    companyDetailsForm: CompanyDetailsFormProps['t']
    companyCredentialsForm: CompanyCredentialsFormProps['t']
    companyCredentialsFormErrors: CompanyCredentialsFormErrors
    companyDetailsFormErrors: CompanyDetailsFormErrors
    subtitle: string
    resetAction: string
    nextAction: string
    submitAction: string
  }
}

const CompanyRegistrationForm: React.FC<CompanyRegistrationFormProps> = ({
  t: {
    packageSelectForm,
    companyDetailsForm,
    companyCredentialsForm,
    companyCredentialsFormErrors,
    companyDetailsFormErrors,
    subtitle,
    nextAction,
    resetAction,
    submitAction
  } = {
    packageSelectForm: {
      packages: [],
      companySizes: [],
      title: '',
      currency: ''
    },
    title: 'Register Your Company',
    subtitle: 'Create your business profile in just a few steps.',
    resetAction: 'Reset',
    nextAction: 'Next',
    submitAction: 'Register'
  }
}) => {
  const { step } = useWidgetContext()

  switch (step) {
    case STEPS.COMPANY_DETAILS: {
      return (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '12px'
            }}
          >
            <CompanyRegistrationHeader subtitle={subtitle} />
            <CompanyDetailsForm t={companyDetailsForm} />
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
        </>
      )
    }

    case STEPS.COMPANY_CREDENTIALS: {
      return (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '12px'
            }}
          >
            <CompanyRegistrationHeader subtitle={subtitle} />
            <CompanyCredentialsForm t={companyCredentialsForm} />
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
        </>
      )
    }

    default:
      return <PackageSelectForm t={packageSelectForm} />
  }
}

export default CompanyRegistrationForm
