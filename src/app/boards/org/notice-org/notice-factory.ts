import { NoticeVo } from 'app/boards/mo/notice-mo/notice-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { NoticeStrategy } from './notice-union'
import { NoticeList } from '../../mo/notice-mo/notice-list'

type Strategy = keyof typeof NoticeStrategy

const NoticeMap: { [_case in Strategy]: StrategyType<NoticeVo[]> } = {
  getAllNotices: new NoticeList(),
  getNoticeById: undefined,
  addNotice: undefined,
  alterNoticeById: undefined,
  getNoticesBy: undefined,
  delNoticeById: undefined
}

export class NoticeFactory {
  static create(_case: Strategy): StrategyType<NoticeVo[]> {
    const strategy = NoticeMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
