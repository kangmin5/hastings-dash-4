import { ReceiptVo } from 'app/taxes/mo/receipt-mo/receipt-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ReceiptStrategy } from './receipt-union'
import { ReceiptList } from '../../mo/receipt-mo/receipt-list'

type Strategy = keyof typeof ReceiptStrategy

const ReceiptMap: { [_case in Strategy]: StrategyType<ReceiptVo[]> } = {
  getAllReceipts: new ReceiptList(),
  getReceiptById: undefined,
  addReceipt: undefined,
  alterReceiptById: undefined,
  getReceiptsBy: undefined,
  delReceiptById: undefined
}

export class ReceiptFactory {
  static create(_case: Strategy): StrategyType<ReceiptVo[]> {
    const strategy = ReceiptMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
