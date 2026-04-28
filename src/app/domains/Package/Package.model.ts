export enum PACKAGE_NAMES {
  MAD_START = 'MAD_START',
  MAD_PRO = 'MAD_PRO',
  MAD_ENTERPRISE = 'MAD_ENTERPRISE'
}

export enum PACKAGE_PERIODS {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}

export type PackageNames = keyof typeof PACKAGE_NAMES
export type PackagePeriods = keyof typeof PACKAGE_PERIODS

export interface Package {
  objectId: PackageNames
  name: string
  description?: string
  prices: number[]
  period: string
  priceCaption?: string
  periodKey: PackagePeriods
  inherits: string | null
  functions: {
    name: string
    subItems?: string[]
    url?: string
  }[]
  action: { isFree: boolean; text: string }
  outroText?: string
  detailsText?: string
  /** Paragraphs shown in the “Se detaljer” modal (optional until configured). */
  detailsModalParagraphs?: string[]
  caption: string
  badgeText?: string
  badgeVariant?: 'warning' | 'dark'

  // Optional fields
  prefix?: string
  nameColor?: string
}
