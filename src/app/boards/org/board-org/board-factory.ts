import { BoardVo } from 'app/boards/mo/board-mo/board-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BoardStrategy } from './board-union'
import { BoardList } from 'app/boards/mo/board-mo/board-list'

type Strategy = keyof typeof BoardStrategy

const BoardMap: { [_case in Strategy]: StrategyType<BoardVo[]> } = {
  getAllBoards: new BoardList(),
  getBoardById: undefined,
  addBoard: undefined,
  alterBoardById: undefined,
  getBoardsBy: undefined,
  delBoardById: undefined
}

export class BoardFactory {
  static create(_case: Strategy): StrategyType<BoardVo[]> {
    const strategy = BoardMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
