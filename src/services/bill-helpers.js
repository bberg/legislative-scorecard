import slug from 'slug'
import { billsById } from '../data/index'

export const billPath = (bill) => {
  const idSlug = slug(bill.uniqueKey)
  const titleSlug = slug(bill.uniqueKey)

  return `/bills/${idSlug}`
}

export const getBillFromParams = (params) => {
  const idSlug = params.billId
  // const id = idSlug.replace('-', ' ')
  console.log(billsById)
  console.log(idSlug)
  return billsById[idSlug]
}
