import PackageView, { PackageViewProps } from '../PackageView/PackageView'

import { Package } from '../../Package.model'
import React from 'react'

export interface PackageSelectProps {
  t: PackageViewProps['t']
  packages: Package[]
  priceIndex: number
  onSelect?: () => void
  currency?: string
}

const PackageSelect: React.FC<PackageSelectProps> = ({
  t,
  packages,
  priceIndex,
  onSelect,
  currency
}) => {
  return (
    <div className="packages-wrapper">
      {packages.map((pkg: Package, index: number) => (
        <div key={index}>
          <PackageView
            currency={currency}
            onSelect={onSelect}
            priceIndex={priceIndex}
            t={t}
            {...pkg}
          />
        </div>
      ))}
    </div>
  )
}

export default PackageSelect
