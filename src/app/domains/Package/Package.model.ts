export interface Package {
  name: string
  prices: number[]
  period: string
  inherits: string | null
  functions: {
    name: string
    subItems?: string[]
  }[]
  action: { isFree: boolean; text: string }
  caption: string
  mostPopular: boolean
}
