import { Package } from '../../Package.model'
import PackageDetailsModal from '../PackageDetailsModal/PackageDetailsModal'
import { PromoCode } from '../../../PromoCode/PromoCode.model'
import React from 'react'
import calculateDiscountedPrice from '../../../../utils/calculateDiscountedPrice'

export interface PackageViewProps extends Package {
  onSelect?: (id: string, period: string) => void
  priceIndex: number
  currency?: string
  appliedPromoCode?: PromoCode | null
}

const PackageView: React.FC<PackageViewProps> = ({
  objectId,
  periodKey,
  name,
  prefix,
  nameColor,
  description,
  prices,
  period,
  priceCaption,
  inherits,
  functions,
  priceIndex,
  caption,
  outroText,
  detailsText,
  detailsModalParagraphs,
  action,
  currency = 'kr',
  badgeText,
  badgeVariant = 'warning',
  onSelect,
  appliedPromoCode
}) => {
  const [detailsOpen, setDetailsOpen] = React.useState(false)

  const originalPrice = prices[priceIndex]

  const finalPrice = calculateDiscountedPrice(
    originalPrice,
    appliedPromoCode || null,
    objectId
  )
  const hasDiscount = appliedPromoCode && finalPrice !== originalPrice

  const handleSelect = () => onSelect?.(objectId, periodKey)

  return (
    <div className="package-view">
      {badgeText && (
        <div className={`package-badge package-badge-${badgeVariant}`}>
          {badgeText}
        </div>
      )}

      <div>
        <div className="text-center">
          <h3 style={{ marginBottom: '12px', fontWeight: 700 }}>
            {prefix && <strong>{prefix}&nbsp;</strong>}
            <strong style={{ color: nameColor }}>{name}</strong>
          </h3>
          {description && (
            <div style={{ marginBottom: '16px' }}>
              <span className="text" style={{ fontSize: '15px' }}>
                {description}
              </span>
            </div>
          )}
          <h4>
            {currency} {finalPrice} {period}
          </h4>
          {hasDiscount && (
            <div style={{ marginBottom: '8px' }}>
              <span
                className="text-caption"
                style={{ textDecoration: 'line-through' }}
              >
                {originalPrice} {currency}
              </span>
            </div>
          )}
          <div style={{ marginTop: '2px' }}>
            <span className="text-caption" style={{ fontSize: '15px' }}>
              {priceCaption}&nbsp;
            </span>
          </div>
          <div style={{ marginTop: '16px' }}>
            {action.isFree ? (
              <button
                style={{ minWidth: '100%', minHeight: '46px' }}
                className="btn btn-primary"
                onClick={handleSelect}
              >
                {action.text}
              </button>
            ) : (
              <button
                style={{ minWidth: '100%', minHeight: '46px' }}
                className="btn btn-primary"
                onClick={handleSelect}
              >
                {action.text}
              </button>
            )}
          </div>
        </div>
        <div style={{ marginTop: '32px' }}>
          {inherits && (
            <div className="package-function" style={{ marginBottom: '8px' }}>
              <div>
                <span className="package-icon-check" />
                <span
                  className="text"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                >
                  {inherits}
                </span>
              </div>
            </div>
          )}
          {functions.map(({ name, subItems, url }, idx) => (
            <div
              key={idx}
              className="package-function"
              style={{ marginBottom: '8px' }}
            >
              <div>
                <span className="package-icon-check" />
                <span className="text" style={{ cursor: 'pointer' }}>
                  <a
                    href={url}
                    target="_blank"
                    className="unset-all"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        letterSpacing: '0px'
                      }}
                    >
                      {name}
                    </span>
                  </a>
                </span>
              </div>
              {subItems?.length && (
                <ul style={{ marginBlock: '4px' }}>
                  {subItems.map((subItem, subIdx) => (
                    <li key={subIdx} className="text">
                      <span className="package-icon-check" />
                      <span className="text-caption">
                        <strong>{subItem}</strong>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {outroText && (
          <div
            className="text-center text"
            style={{ marginBottom: '12px', whiteSpace: 'nowrap' }}
          >
            {outroText}
          </div>
        )}
        {detailsText && (
          <>
            <div className="text-center text-caption">
              <button
                type="button"
                className="package-details-trigger text-caption"
                onClick={() => setDetailsOpen(true)}
              >
                <i style={{ fontSize: '13px' }}>{detailsText}</i>
              </button>
            </div>
            <PackageDetailsModal
              open={detailsOpen}
              onClose={() => setDetailsOpen(false)}
              paragraphs={detailsModalParagraphs ?? []}
            />
          </>
        )}
        <div className="divider" style={{ width: '100%' }} />
        <div className="text-center text-caption" style={{ marginTop: '' }}>
          {caption}
        </div>
      </div>
    </div>
  )
}

export default PackageView
