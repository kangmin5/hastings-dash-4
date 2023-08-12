export class ReplyAtom {
  constructor(
    public replier?: string,
    public reply?: string,
    public answer?: string,
    public comment?: string,
    public replyDate?: string,
    public answerStatus?: string,
    public hasAnswer?: boolean,
    public hasReply?: boolean
  ) {}
}

export class ReplyDto {
  replier?: string
   answerStatus?: string
   reply?: string
   answer?: string
   comment?: string
   hasAnswer?: boolean
    hasReply?: boolean

  constructor() {
    this.replier = ''
    this.answerStatus = ''
    this.reply = ''
    this.answer = ''
    this.comment = ''
    this.hasAnswer = false
    this.hasReply = false
  }

  setReplier(replier: string): void {
    this.replier = replier
  }

  setAnswer(answer: string): void {
    this.answer = answer
  }

  setComment(comment: string): void {
    this.comment = comment
  }

  setAnswerStatus(answerStatus: string): void {
    this.answerStatus = answerStatus
  }

  setReply(reply: string): void {
    this.reply = reply
  }

  setHasAnswer(hasAnswer: boolean): void {
    this.hasAnswer = hasAnswer
  }

  setHasReply(hasReply: boolean): void {
    this.hasReply = hasReply
  }


  toJson(): {} {
    return {
      replyId: this.replier,
      answerStatus: this.answerStatus,
      reply: this.reply,
      answer: this.answer,
      comment: this.comment,
      hasAnswer: this.hasAnswer,
      hasReply: this.hasReply
    }
  }

}

export class ReplyBuilder {
  private readonly instance: ReplyAtom

  constructor() {
    this.instance = {
      replier: '',
      reply: '',
      answer: '',
      comment: '',
      replyDate: '',
      answerStatus: '',
      hasAnswer: false,
      hasReply: false
    }
  }
  replier(replier: string): ReplyBuilder {
    this.instance.replier = replier
    return this
  }
  reply(reply: string): ReplyBuilder {
    this.instance.reply = reply
    return this
  }
  answer(answer: string): ReplyBuilder {
    this.instance.answer = answer
    return this
  }
  comment(comment: string): ReplyBuilder {
    this.instance.comment = comment
    return this
  }
  replyDate(replyDate: string): ReplyBuilder {
    this.instance.replyDate = replyDate
    return this
  }
  answerStatus(answerStatus: string): ReplyBuilder {
    this.instance.answerStatus = answerStatus
    return this
  }
  hasAnswer(hasAnswer: boolean): ReplyBuilder {
    this.instance.hasAnswer = hasAnswer
    return this
  }
  hasReply(hasReply: boolean): ReplyBuilder {
    this.instance.hasReply = hasReply
    return this
  }
  build = (): ReplyAtom => this.instance
  transform = (): ReplyDto => {
    const replyDto = new ReplyDto()
    replyDto.setReplier(this.instance.replier)
    replyDto.setAnswer(this.instance.answer)
    replyDto.setAnswerStatus(this.instance.answerStatus)
    replyDto.setComment(this.instance.comment)
    replyDto.setReply(this.instance.reply)
    replyDto.setHasAnswer(this.instance.hasAnswer)
    replyDto.setHasReply(this.instance.hasReply)
    return replyDto
  }
}
