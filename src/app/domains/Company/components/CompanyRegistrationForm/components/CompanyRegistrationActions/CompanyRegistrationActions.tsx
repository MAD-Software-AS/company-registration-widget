import {
  CompanyCredentialsFormErrors,
  validateCompanyCredentialsForm
} from '../CompanyCredentialsForm/CompanyCredentialsForm'
import {
  CompanyDetailsFormErrors,
  validateCompanyDetailsForm
} from '../CompanyDetailsForm/CompanyDetailsForm'

import { POS_PROVIDERS } from '../../../../Company.constants'
import React from 'react'
import useWidgetContext from '../../../../../../contexts/Widget/useWidgetContext'

interface CompanyRegistrationActionsProps {
  t: {
    resetAction: string
    nextAction: string
    submitAction: string
    companyCredentialsFormErrors?: CompanyCredentialsFormErrors
    companyDetailsFormErrors?: CompanyDetailsFormErrors
  }
}

const CompanyRegistrationActions: React.FC<CompanyRegistrationActionsProps> = ({
  t: {
    resetAction,
    nextAction,
    submitAction,
    companyCredentialsFormErrors,
    companyDetailsFormErrors
  }
}) => {
  const {
    formData,
    isFirstStepCompleted,
    reset,
    setState,
    submitState,
    setSubmitState
  } = useWidgetContext()

  const handleNext = () => {
    setState((prev) => {
      const errors = validateCompanyDetailsForm(
        prev.formData.companyData,
        prev.formData.posProvider,
        prev.formData.posProviderName,
        companyDetailsFormErrors
      )

      if (errors) {
        return {
          ...prev,
          errors: {
            ...prev.errors,
            companyData: errors.companyData,
            posProvider: errors.posProvider,
            posProviderName: errors.posProviderName
          }
        }
      }

      return { ...prev, isFirstStepCompleted: true }
    })
  }

  const handleSubmit = () => {
    const errors = validateCompanyCredentialsForm(
      formData.email,
      formData.password,
      formData.fullName,
      formData.termsAccepted,
      companyCredentialsFormErrors
    )

    if (errors) {
      return setState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          email: errors.email,
          password: errors.password,
          confirmPassword: errors.confirmPassword,
          fullName: errors.fullName,
          termsAccepted: errors.termsAccepted
        }
      }))
    }

    try {
      setSubmitState({
        isLoading: true,
        error: false,
        success: false,
        errorMsg: null
      })

      const data = {
        email: formData.email,
        password: formData.password,
        companyData: formData.companyData,
        posProvider:
          formData.posProvider === POS_PROVIDERS.OTHER
            ? formData.posProviderName
            : formData.posProvider
      }

      setTimeout(() => {
        console.log(data)
        setSubmitState({
          isLoading: false,
          error: false,
          success: true,
          errorMsg: null
        })
      }, 2000)
    } catch (error) {
      setSubmitState({
        isLoading: false,
        error: true,
        success: false,
        errorMsg: 'Error'
      })
    }
  }

  return (
    <div className="flex-between">
      <button className="btn btn-secondary" onClick={reset}>
        {resetAction}
      </button>
      <button
        className="btn btn-primary"
        disabled={submitState.isLoading}
        onClick={isFirstStepCompleted ? handleSubmit : handleNext}
      >
        {isFirstStepCompleted ? submitAction : nextAction}
      </button>
    </div>
  )
}

export default CompanyRegistrationActions
