import React, { useState } from 'react'
import WidgetContext, {
  WidgetProviderState,
  initialFormData,
  initialSubmitState
} from './WidgetContext'

interface WidgetProviderProps {
  children: React.ReactElement | React.ReactElement[] | string
  env: string
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({ children, env }) => {
  const [submitState, setSubmitState] = useState(initialSubmitState)
  const [state, setState] = useState<WidgetProviderState>({
    isFirstStepCompleted: false,
    formData: initialFormData,
    errors: {}
  })

  const reset = () => {
    setState({
      isFirstStepCompleted: false,
      formData: initialFormData,
      errors: {}
    })
    setSubmitState(initialSubmitState)
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
