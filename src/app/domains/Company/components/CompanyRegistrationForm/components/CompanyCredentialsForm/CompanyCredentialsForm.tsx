import FormField from '../../../../../../components/FormField/FormField'
import React from 'react'
import useWidgetContext from '../../../../../../contexts/Widget/useWidgetContext'

export interface CompanyCredentialsFormProps {
  t?: {
    emailPlaceholder?: string
    passwordPlaceholder?: string
    confirmPasswordPlaceholder?: string
  }
}

export type CompanyCredentialsFormErrors = {
  emailRequired: string
  emailInvalid: string
  passwordRequired: string
  confirmPasswordRequired: string
  confirmPasswordMismatch: string
}

export const validateCompanyCredentialsForm = (
  email: string | null,
  password: string | null,
  confirmPassword: string | null,
  t: CompanyCredentialsFormErrors = {
    emailRequired: 'Email is required',
    emailInvalid: 'Email is invalid',
    passwordRequired: 'Password is required',
    confirmPasswordRequired: 'Password confirmation is required',
    confirmPasswordMismatch: 'Passwords do not match'
  }
) => {
  const errors: Record<string, string> = {}

  if (!email) {
    errors.email = t.emailRequired
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = t.emailInvalid
  }

  if (!password) {
    errors.password = t.passwordRequired
  }

  if (!confirmPassword) {
    errors.confirmPassword = t.confirmPasswordRequired
  }
  if (password && confirmPassword && password !== confirmPassword) {
    errors.confirmPassword = t.confirmPasswordMismatch
  }

  return Object.keys(errors).length > 0 ? errors : null
}

const CompanyCredentialsForm: React.FC<CompanyCredentialsFormProps> = ({
  t = {
    emailPlaceholder: 'Enter user email',
    passwordPlaceholder: 'Enter user password',
    confirmPasswordPlaceholder: 'Confirm user password'
  }
}) => {
  const { formData, errors, setState } = useWidgetContext()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, email: value },
      errors: { ...prev.errors, email: null }
    }))
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, password: value },
      errors: { ...prev.errors, password: null }
    }))
  }
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value
    setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, confirmPassword: value },
      errors: { ...prev.errors, confirmPassword: null }
    }))
  }

  return (
    <>
      <FormField error={errors.email}>
        <input
          type="text"
          className="input"
          value={formData.email || ''}
          placeholder={t?.emailPlaceholder}
          onChange={handleEmailChange}
        />
      </FormField>
      <FormField error={errors.password}>
        <input
          type="password"
          className="input"
          value={formData.password || ''}
          placeholder={t?.passwordPlaceholder}
          onChange={handlePasswordChange}
        />
      </FormField>
      <FormField error={errors.confirmPassword}>
        <input
          type="password"
          className="input"
          value={formData.confirmPassword || ''}
          placeholder={t?.confirmPasswordPlaceholder}
          onChange={handleConfirmPasswordChange}
        />
      </FormField>
    </>
  )
}

export default CompanyCredentialsForm
