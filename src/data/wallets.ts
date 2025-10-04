import type { Wallet } from "@/types"

export const wallets: Wallet[] = [
  {
    type: "universal",
    universal: "mastercard",
    cardNumber: [5495, 7381, 3759, 2321],
  },
  {
    type: "commercial",
    universal: "visa",
    cardNumber: [5495, 7381, 3759, 2321],
    month: "09",
    year: "2025"
  },
]
