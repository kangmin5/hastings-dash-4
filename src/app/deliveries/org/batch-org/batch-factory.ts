import { BatchVo } from 'app/deliveries/mo/batch-mo/batch-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BatchStrategy } from './batch-union'
import { BatchList } from 'app/deliveries/mo/batch-mo/batch-list'

type Strategy = keyof typeof BatchStrategy

const BatchMap: { [_case in Strategy]: StrategyType<BatchVo[]> } = {
  getAllBatches: new BatchList(),
  getBatchById: undefined,
  addBatch: undefined,
  alterBatchById: undefined,
  getBatchesBy: undefined,
  delBatchById: undefined
}

export class BatchFactory {
  static create(_case: Strategy): StrategyType<BatchVo[]> {
    const strategy = BatchMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
