import React, { useState } from 'react'
import WidgetContext, {
  STEPS,
  WidgetProviderState,
  initialSubmitState,
  initialWidgetState
} from './WidgetContext'

interface WidgetProviderProps {
  preSelectedPackageId: string | null
  children: React.ReactElement | React.ReactElement[] | string
  env: string
}

const WidgetProvider: React.FC<WidgetProviderProps> = ({
  children,
  env,
  preSelectedPackageId
}) => {
  const [state, setState] = useState<WidgetProviderState>({
    ...initialWidgetState,
    formData: {
      ...initialWidgetState.formData,
      packageId: preSelectedPackageId || null,
      packagePeriod: preSelectedPackageId ? 'MONTHLY' : null
    },
    step: preSelectedPackageId ? STEPS.COMPANY_DETAILS : STEPS.PLAN_SELECT
  })
  const [submitState, setSubmitState] = useState(initialSubmitState)

  const reset = () => {
    setState(initialWidgetState)
    setSubmitState(initialSubmitState)
  }

  return (
    <WidgetContext.Provider
      value={{
        formData: state.formData,
        setState,
        submitState,
        setSubmitState,
        step: state.step,
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
