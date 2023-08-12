import { BankVo } from 'app/taxes/mo/bank-mo/bank-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BankStrategy } from './bank-union'
import { BankList } from 'app/taxes/mo/bank-mo/bank-list'

type Strategy = keyof typeof BankStrategy

const BankMap: { [_case in Strategy]: StrategyType<BankVo[]> } = {
  getAllBanks: new BankList(),
  getBankById: undefined,
  addBank: undefined,
  alterBankById: undefined,
  getBanksBy: undefined,
  delBankById: undefined
}

export class BankFactory {
  static create(_case: Strategy): StrategyType<BankVo[]> {
    const strategy = BankMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
