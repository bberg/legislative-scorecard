import legislators from './legislators.json'
import bills from './bills.json'
import dcbills from './dcbills.json'
import dcbillstest from './dcbillstest.json'
import aboutSections from './aboutSections.json'
import faqs from './faqs.json'
import slug from 'slug'

// Index legislators by ocdId
const legislatorsByOcdId = {}
legislators.forEach(function(legislator) {
  legislatorsByOcdId[legislator.ocdId] = legislator
})

// Index bills by id
const billsById = {}
dcbills.forEach(function(bill) {
  billsById[slug(bill.uniqueKey)] = bill
})


export {
  legislators,
  legislatorsByOcdId,
  bills,
  billsById,
  aboutSections,
  faqs,
  dcbills,
  dcbillstest,
}
