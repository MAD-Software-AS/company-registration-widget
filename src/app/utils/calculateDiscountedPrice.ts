import { PackageNames } from '../domains/Package/Package.model'
import { PromoCode } from '../domains/PromoCode/PromoCode.model'

const calculateDiscountedPrice = (
  originalPrice: number,
  promoCode: PromoCode | null,
  packageName: PackageNames
) => {
  if (!promoCode) return originalPrice

  if (promoCode.type === 'percentage') {
    return Math.round(originalPrice * (1 - (promoCode.discount || 0) / 100))
  } else if (promoCode.type === 'package_percentage') {
    return Math.round(
      originalPrice *
        (1 - (promoCode.packagesDiscount?.[packageName] || 0) / 100)
    )
  }

  return originalPrice
}

export default calculateDiscountedPrice
