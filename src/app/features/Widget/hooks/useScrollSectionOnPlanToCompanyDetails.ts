import { useLayoutEffect, useRef } from 'react'

import useWidgetContext from '../../../contexts/Widget/useWidgetContext'

const useScrollSectionOnPlanToCompanyDetails = () => {
  const { step } = useWidgetContext()
  const sectionRef = useRef<HTMLDivElement>(null)
  const previousStepRef = useRef(step)

  useLayoutEffect(() => {
    sectionRef.current?.scrollIntoView?.({
      behavior: 'smooth',
      block: 'start'
    })
    previousStepRef.current = step
  }, [step])

  return sectionRef
}

export default useScrollSectionOnPlanToCompanyDetails
