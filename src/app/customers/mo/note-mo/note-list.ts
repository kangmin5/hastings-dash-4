import { NoteVo, NoteTo } from 'app/customers/mo/note-mo/note-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { AdmitBuilder } from 'app/customers/atom/admit-atom'

export class NoteList implements StrategyType<NoteVo[]> {
  handle(args?: any): NoteVo[] {
    const items: NoteVo[] = []
    const array = args
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const x1 = array[i].consent
      const note = new AdmitBuilder()
        .consent(x1)

        .build()

      const to = new NoteTo()
      to.setNote(note)
      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      items.push(jo)
    }
    return items
  }
}
