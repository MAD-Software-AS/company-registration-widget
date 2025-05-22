import { CompanyType } from 'src/app/domains/Company/Company.constants'
import { createContext } from 'react'

export interface WidgetState {
  companyData: CompanyType | null
  posProvider: string | null
  posProviderName: string | null
  password: string | null
  confirmPassword: string | null
  email: string | null
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

const WidgetContext = createContext<WidgetContextValues>({
  isFirstStepCompleted: false,
  formData: {
    companyData: null,
    posProvider: null,
    posProviderName: null,
    password: null,
    confirmPassword: null,
    email: null
  },
  setState: () => {},
  submitState: {
    isLoading: false,
    success: false,
    error: false,
    errorMsg: null
  },
  setSubmitState: () => {},
  errors: {},
  reset: () => {},
  env: 'dev'
})

export default WidgetContext
