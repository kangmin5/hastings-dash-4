import { BoardTo, BoardVo } from 'app/boards/mo/board-mo/board-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { BarBuilder } from 'app/boards/atom/bar-atom'

export class BoardList implements StrategyType<BoardVo[]> {
  handle(args?: any): BoardVo[] {
    const items: BoardVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const id = array[i].id

      const a1 = new BarBuilder().id(id).build()

      const to = new BoardTo()

      to.setBar(a1)

      items.push(to)
    }
    return items
  }
}
