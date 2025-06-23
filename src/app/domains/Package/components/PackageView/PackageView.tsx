import { Package } from '../../Package.model'
import React from 'react'

interface PackageViewProps extends Package {
  onSelect?: () => void
  priceIndex: number
  currency?: string
}

const PackageView: React.FC<PackageViewProps> = ({
  name,
  prices,
  period,
  inherits,
  functions,
  priceIndex,
  caption,
  action,
  currency = 'kr',
  onSelect
}) => {
  const price = prices[priceIndex]

  const handleSelect = () => onSelect?.()

  return (
    <div className="package-view">
      <div className="text-center">
        <h3 className="subtitle" style={{ marginBottom: '24px' }}>
          <strong>{name}</strong>
        </h3>
        <h1 className="title" style={{ marginBottom: '12px' }}>
          {price} {currency}
        </h1>
        <span className="text-caption">{period}</span>
        <div className="divider" />
        {inherits && (
          <div className="subtitle" style={{ marginBottom: '32px' }}>
            <strong>{inherits}</strong>
          </div>
        )}
        {functions.length > 0 && (
          <div>
            {functions.map((func, idx) => (
              <div key={idx} className="package-function">
                <span className="icon-check" />
                <span className="subtitle">
                  <strong>{func}</strong>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {action.isFree ? (
          <button
            style={{ minWidth: '140px' }}
            className="btn btn-primary"
            onClick={handleSelect}
          >
            {action.text}
          </button>
        ) : (
          <button
            style={{ minWidth: '140px' }}
            className="btn btn-dark"
            onClick={handleSelect}
          >
            {action.text}
          </button>
        )}
        <div className="text-center text-caption" style={{ marginTop: '16px' }}>
          {caption}
        </div>
      </div>
    </div>
  )
}

export default PackageView
