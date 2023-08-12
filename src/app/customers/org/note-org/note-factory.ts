import { NoteVo } from 'app/customers/mo/note-mo/note-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { NoteStrategy } from './note-union'
import { NoteList } from '../../mo/note-mo/note-list'

type Strategy = keyof typeof NoteStrategy

const NoteMap: { [_case in Strategy]: StrategyType<NoteVo[]> } = {
  getAllNotes: new NoteList(),
  getNoteById: undefined,
  addNote: undefined,
  alterNoteById: undefined,
  getNotesBy: undefined,
  delNoteById: undefined
}

export class NoteFactory {
  static create(_case: Strategy): StrategyType<NoteVo[]> {
    const strategy = NoteMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
