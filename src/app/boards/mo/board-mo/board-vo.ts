import { BarAtom, BarBuilder, BarDto } from 'app/boards/atom/bar-atom'

export class BoardVo {
  constructor(public bar?: BarAtom) {}
}

export class BoardTo {
  bar?: BarDto

  setBar(bar: BarAtom): void {
    this.bar = new BarBuilder().id(bar.id).transform()
  }
  toJson() {
    return {
      boy: this.bar.toJson()
    }
  }
}

export class BoardBo {
  private readonly instance: BoardVo

  constructor() {
    this.instance = {
      bar: new BarAtom()
    }
  }

  bar(bar: BarAtom): BoardBo {
    this.instance.bar = bar
    return this
  }



  build(): BoardVo {
    return this.instance
  }
  transform(): BoardTo {
    const to = new BoardTo()
    to.setBar(this.instance.bar)
    return to
  }
}
