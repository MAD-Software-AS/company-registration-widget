import { Package } from '../../Package.model'
import PackageView from '../PackageView/PackageView'
import React from 'react'

interface PackageSelectProps {
  packages: Package[]
  priceIndex: number
  onSelect?: () => void
  currency?: string
}

const PackageSelect: React.FC<PackageSelectProps> = ({
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
            {...pkg}
          />
        </div>
      ))}
    </div>
  )
}

export default PackageSelect
