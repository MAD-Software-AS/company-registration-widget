import CompanySizeSelect from '../../domains/Company/components/CompanySizeSelect/CompanySizeSelect'
import { Package } from '../../domains/Package/Package.model'
import PackageSelect from '../../domains/Package/components/PackageSelect/PackageSelect'
import React from 'react'
import { STEPS } from '../../contexts/Widget/WidgetContext'
import useWidgetContext from '../../contexts/Widget/useWidgetContext'

export interface PackageSelectFormProps {
  t: {
    packages: Package[]
    companySizes: string[]
    title: string
    pricesDescription: string
    mostPopular: string
    currency?: string
  }
}

const PackageSelectForm: React.FC<PackageSelectFormProps> = ({
  t: { companySizes, packages, title, currency, pricesDescription, mostPopular }
}) => {
  const [priceIndex, setPriceIndex] = React.useState(0)

  const { setState } = useWidgetContext()

  const handlePackageSelect = (id: string, period: string) => {
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        packageId: id,
        packagePeriod: period
      },
      step: STEPS.COMPANY_DETAILS
    }))
  }

  return (
    <>
      <h1 className="subtitle text-center">{title}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBlock: '48px'
        }}
      >
        <CompanySizeSelect
          companySizes={companySizes}
          onChange={setPriceIndex}
          value={priceIndex}
        />
      </div>
      <div>
        <PackageSelect
          t={{ mostPopular }}
          currency={currency}
          onSelect={handlePackageSelect}
          priceIndex={priceIndex}
          packages={packages}
        />
      </div>
      <div className="text-center" style={{ marginTop: '32px' }}>
        <span className="text">{pricesDescription}</span>
      </div>
    </>
  )
}

export default PackageSelectForm
