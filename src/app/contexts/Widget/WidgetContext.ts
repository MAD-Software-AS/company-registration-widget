import { CompanyType } from 'src/app/domains/Company/Company.constants'
import { createContext } from 'react'

export interface WidgetState {
  companyData: CompanyType | null
  posProvider: string | null
  posProviderName: string | null
  password: string | null
  fullName: string | null
  email: string | null
  termsAccepted: boolean
}

export interface SubmitState {
  isLoading: boolean
  success: boolean
  error: boolean
  errorMsg: string | null
}

export interface WidgetProviderState {
  errors: Record<string, string | null>
  isFirstStepCompleted: boolean
  formData: WidgetState
}

interface WidgetContextValues {
  formData: WidgetState
  setState: React.Dispatch<React.SetStateAction<WidgetProviderState>>
  submitState: SubmitState
  setSubmitState: React.Dispatch<React.SetStateAction<SubmitState>>
  isFirstStepCompleted: boolean
  errors: Record<string, string | null>
  reset: () => void
  env: string
}

export const initialFormData: WidgetState = {
  termsAccepted: false,
  companyData: null,
  posProvider: null,
  posProviderName: null,
  password: null,
  fullName: null,
  email: null
}
export const initialSubmitState: SubmitState = {
  isLoading: false,
  success: false,
  error: false,
  errorMsg: null
}

const WidgetContext = createContext<WidgetContextValues>({
  isFirstStepCompleted: false,
  formData: initialFormData,
  submitState: initialSubmitState,
  setState: () => {},
  setSubmitState: () => {},
  errors: {},
  reset: () => {},
  env: 'dev'
})

export default WidgetContext
