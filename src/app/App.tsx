import Widget, { WidgetProps } from './features/Widget/Widget'

import React from 'react'
import WidgetProvider from './contexts/Widget/WidgetProvider'

interface AppProps {
  t: WidgetProps['t']
  env: string
  preSelectedPackageId: string | null
  isFreeTrial?: boolean
}

const App: React.FC<AppProps> = ({
  env,
  t,
  preSelectedPackageId,
  isFreeTrial
}) => {
  return (
    <WidgetProvider env={env} preSelectedPackageId={preSelectedPackageId}>
      <Widget t={t} isFreeTrial={isFreeTrial} />
    </WidgetProvider>
  )
}

export default App
