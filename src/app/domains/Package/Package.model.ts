export interface Package {
  objectId: 'MAD Start' | 'MAD Pro' | 'MAD Enterprise'
  name: string
  prices: number[]
  period: string
  periodKey: 'monthly' | 'yearly'
  inherits: string | null
  functions: {
    name: string
    subItems?: string[]
  }[]
  action: { isFree: boolean; text: string }
  caption: string
  mostPopular: boolean
}
