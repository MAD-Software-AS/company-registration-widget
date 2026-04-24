import PromoCodeInput, {
  PromoCodeInputProps
} from '../../domains/PromoCode/components/PromoCodeInput/PromoCodeInput'

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
    subtitle: string
    pricesDescription: string
    currency?: string
    promoCode?: PromoCodeInputProps['t']
  }
}

const PackageSelectForm: React.FC<PackageSelectFormProps> = ({
  t: {
    companySizes,
    packages,
    title,
    subtitle,
    currency,
    pricesDescription,
    promoCode
  }
}) => {
  const [priceIndex, setPriceIndex] = React.useState(0)

  const { formData, setState, env } = useWidgetContext()

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

  const handlePromoCodeApplied = (promoCode: any) => {
    setState((prev) => ({
      ...prev,
      formData: {
        ...prev.formData,
        appliedPromoCode: promoCode
      }
    }))
  }

  return (
    <>
      <h1 className="title-1 text-center">{title}</h1>
      <span
        className="subtitle text-center"
        style={{ marginTop: '24px', marginBottom: '40px' }}
      >
        {subtitle}
      </span>
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
      <div>
        <PackageSelect
          currency={currency}
          onSelect={handlePackageSelect}
          priceIndex={priceIndex}
          packages={packages}
          appliedPromoCode={formData.appliedPromoCode}
        />
      </div>
      <div className="text-center" style={{ marginTop: '24px' }}>
        <span className="text">{pricesDescription}</span>
      </div>
      {promoCode && (
        <div style={{ marginTop: '12px' }}>
          <PromoCodeInput
            t={promoCode}
            onPromoCodeApplied={handlePromoCodeApplied}
            appliedPromoCode={formData.appliedPromoCode}
            env={env}
          />
        </div>
      )}
    </>
  )
}

export default PackageSelectForm
