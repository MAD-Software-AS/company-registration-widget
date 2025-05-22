export const POS_PROVIDERS = {
  FIXIT_ONLINE: 'fixitOnline',
  COM2GETHER: 'com2gether',
  OTHER: 'other'
} as const

export const DEBOUNCE_DELAY = 300 // ms

export type CompanyType = {
  name: string
  orgNumber: string
  phoneNumber: string
  mobileNumber: string
  email: string
  address: {
    postalCode: string
    country: string
    countryCode: string
    municipality: string
    addresses: string[]
  }
}
