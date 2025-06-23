export interface Package {
  name: string
  prices: number[]
  period: string
  inherits: string | null
  functions: string[]
  action: { isFree: boolean; text: string }
  caption: string
}
