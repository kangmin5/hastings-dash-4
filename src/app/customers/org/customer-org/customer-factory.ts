import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CustomerStrategy } from 'app/customers/org/customer-org/customer-union'
import { CustomerDraft } from 'app/customers/mo/customer-mo/customer-draft'
import { CustomerDesign } from 'app/customers/mo/customer-mo/customer-design'

type Strategy = keyof typeof CustomerStrategy

const CustomerMap: { [_case in Strategy]: StrategyType<CustomerVo[]> } = {
  getAllCustomers: new CustomerDraft(),
  getCustomerById: new CustomerDesign(),
  addCustomer: undefined,
  alterCustomerById: undefined,
  getCustomersBy: undefined,
  delCustomerById: undefined
}

export class CustomerFactory {
  static create(_case: Strategy): StrategyType<CustomerVo[]> {
    const strategy = CustomerMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
