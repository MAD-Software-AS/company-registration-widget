import React, { useState } from 'react'
import WidgetContext, {
  SubmitState,
  WidgetProviderState
} from './WidgetContext'

interface WidgetProviderProps {
  children: React.ReactElement | React.ReactElement[] | string
  env: string
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({ children, env }) => {
  const [submitState, setSubmitState] = useState<SubmitState>({
    isLoading: false,
    error: false,
    success: false,
    errorMsg: null
  })
  const [state, setState] = useState<WidgetProviderState>({
    isFirstStepCompleted: false,
    formData: {
      companyData: null,
      posProvider: null,
      posProviderName: null,
      password: null,
      confirmPassword: null,
      email: null
    },
    errors: {}
  })

  const reset = () => {
    setState({
      isFirstStepCompleted: false,
      formData: {
        posProviderName: null,
        companyData: null,
        posProvider: null,
        password: null,
        confirmPassword: null,
        email: null
      },
      errors: {}
    })
    setSubmitState({
      isLoading: false,
      error: false,
      success: false,
      errorMsg: null
    })
  }

  return (
    <WidgetContext.Provider
      value={{
        formData: state.formData,
        setState,
        submitState,
        setSubmitState,
        isFirstStepCompleted: state.isFirstStepCompleted,
        errors: state.errors,
        reset,
        env
      }}
    >
      {children}
    </WidgetContext.Provider>
  )
}

export default WidgetProvider
