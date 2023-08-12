import Memento from './singleton'

export default class Factory {
  name(params: any) {
    const a = Memento.new().someBusinessLogic()
  }
}
