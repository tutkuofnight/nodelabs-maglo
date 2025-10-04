import type { ElementType } from "react"

export type TransferTypes = {
  profileImage: string
  fullname: string
  date: Date
  amount: number
}

export type MenuItem = {
  name: string
  icon?: ElementType
  url: string
}

export type SelectOption = {
  value: string
  label: string
}

export type Wallet = {
  type: "universal" | "commercial"
  universal: "visa" | "mastercard"
  cardNumber: number[]
  month?: string
  year?: string
}

export type TableDataTypes = {
  name: string
  imageUrl: string
  business: string
  type: string
  amount: number
  date: Date
}

export type WorkingCapitalPoint = {
  date: string;
  income: number;
  expenses: number;
};