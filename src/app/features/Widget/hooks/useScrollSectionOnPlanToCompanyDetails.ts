import { useLayoutEffect, useRef } from 'react'

import { STEPS } from '../../../contexts/Widget/WidgetContext'
import useWidgetContext from '../../../contexts/Widget/useWidgetContext'

const useScrollSectionOnPlanToCompanyDetails = () => {
  const { step } = useWidgetContext()
  const sectionRef = useRef<HTMLDivElement>(null)
  const previousStepRef = useRef(step)

  useLayoutEffect(() => {
    if (
      previousStepRef.current === STEPS.PLAN_SELECT &&
      step === STEPS.COMPANY_DETAILS
    ) {
      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    previousStepRef.current = step
  }, [step])

  return sectionRef
}

export default useScrollSectionOnPlanToCompanyDetails
