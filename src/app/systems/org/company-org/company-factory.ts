import { CompanyVo } from 'app/systems/mo/company-mo/company-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CompanyStrategy } from './company-union'
import { CompanyList } from 'app/systems/mo/company-mo/company-list'

type Strategy = keyof typeof CompanyStrategy

const CompanyMap: { [_case in Strategy]: StrategyType<CompanyVo[]> } = {
  getAllCompanies: new CompanyList(),
  getCompanyById: undefined,
  addCompany: undefined,
  alterCompanyById: undefined,
  getCompaniesBy: undefined,
  delCompanyById: undefined
}

export class CompanyFactory {
  static create(_case: Strategy): StrategyType<CompanyVo[]> {
    const strategy = CompanyMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
