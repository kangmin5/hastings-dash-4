import { NoteFactory as factory } from './note-factory'
import { NoteStrategy as strategy } from './note-union'
import { default as NoteSlice } from './note-slice'
import { NoteVo } from 'app/customers/mo/note-mo/note-vo'
import { TroubleVo as TV } from 'app/systems/org/trouble-org/trouble-vo'
import { TroubleFactory as TF } from 'app/systems/org/trouble-org/trouble-factory'
import { TroubleStrategy as TS } from 'app/systems/org/trouble-org/trouble-union'

export class NoteDao {
  static addOneSuccess = (payload: any): NoteVo[] => factory.create(strategy.addNote).handle(payload)
  static getAllSuccess = (payload: any): NoteVo[] => factory.create(strategy.getAllNotes).handle(payload)
  static getBySuccess = (payload: any) => undefined
  static getByIdSuccess = (payload: any) => undefined
  static alterByIdSuccess = (payload: any) => undefined
  static delByIdSuccess = (payload: any) => undefined
}

export { NoteSlice }
