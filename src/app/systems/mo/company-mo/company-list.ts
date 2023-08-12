import { CompanyVo } from 'app/systems/mo/company-mo/company-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CompanyBo } from 'app/systems/mo/company-mo/company-vo'

export class CompanyList implements StrategyType<CompanyVo[]> {
  handle(args?: any): CompanyVo[] {
    const items: CompanyVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new CompanyBo()
        .companyId(array[i].id)

        .transform()
        .toJson()
      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}
