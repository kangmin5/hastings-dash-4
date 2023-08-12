import { CustomerFactory as factory } from './customer-factory'
import { CustomerStrategy as strategy } from 'app/customers/org/customer-org/customer-union'
import { default as CustomerSlice } from './customer-slice'
import { CustomerVo } from 'app/customers/mo/customer-mo/customer-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class CustomerDao {
  static addOneSuccess = (payload: any): CustomerVo[] => factory.create(strategy.addCustomer).handle(payload)
  static getAllSuccess = (payload: any): CustomerVo[] => factory.create(strategy.getAllCustomers).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any): CustomerVo[] => factory.create(strategy.getCustomerById).handle(payload)
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { CustomerSlice }
