import CompanySizeSelect from '../../domains/Company/components/CompanySizeSelect/CompanySizeSelect'
import PackageSelect from '../../domains/Package/components/PackageSelect/PackageSelect'
import React from 'react'
import { STEPS } from '../../contexts/Widget/WidgetContext'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

export interface PackageSelectFormProps {
  t: {
    packages: Package[]
    companySizes: string[]
    title: string
    currency?: string
  }
}

interface Package {
  name: string
  prices: number[]
  period: string
  inherits: string | null
  functions: string[]
  action: { isFree: boolean; text: string }
  caption: string
}

const PackageSelectForm: React.FC<PackageSelectFormProps> = ({
  t: { companySizes, packages, title, currency }
}) => {
  const [priceIndex, setPriceIndex] = React.useState(0)

  const { setState } = useWidgetContext()

  const handlePackageSelect = () => {
    setState((prev) => ({ ...prev, step: STEPS.COMPANY_DETAILS }))
  }

  return (
    <>
      <h1
        className="subtitle"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        {title}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px'
        }}
      >
        <CompanySizeSelect
          companySizes={companySizes}
          onChange={setPriceIndex}
          value={priceIndex}
        />
      </div>
      <PackageSelect
        currency={currency}
        onSelect={handlePackageSelect}
        priceIndex={priceIndex}
        packages={packages}
      />
    </>
  )
}

export default PackageSelectForm
