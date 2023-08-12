import { TroubleDao as TD } from 'app/systems/org/trouble-org/trouble-dao'
import { TroubleAspect as TA } from 'app/systems/org/trouble-org/trouble-aspect'
import { DateMap } from 'app/utils/atom/date-atom'

export class TroubleAspect {
  private static instance: TroubleAspect

  private constructor() {}

  public static check(): TroubleAspect {
    if (!TroubleAspect.instance) {
      TroubleAspect.instance = new TroubleAspect()
    }
    return TroubleAspect.instance
  }

  hasToken(payload: any) {
    const data = payload.data
    let hasToken: boolean = true
    if (data.code == 20003) {
      console.log('[', data.success, '] 로그인 인증토큰이 없습니다')
      TD.hasNotAccessTokenTrouble(data.explanation)
      hasToken = false
    }
    return hasToken
  }
  isGoodQuery(payload: any) {
    const data = payload.data
    let isGoodQuery: boolean = true
    if (!data.success) {
      console.log('[ 쿼리는 올바르지만, 서버에서 받은 상태값은 ', data.success, ' 입니다] ', data.explanation)
      TD.successIsFalseTrouble(data.explanation)
      isGoodQuery = false
    }
    return isGoodQuery
  }

  notOK(payload: any, OK: boolean, GOOD: boolean) {
    if (!OK && GOOD) {
      //TD.getAllFailureTrouble(payload);
      console.log(`[Error Issue] ${DateMap().get()} 쿼리 Good 유효성 Bad `)
    } else if (OK && !GOOD) {
      console.log(`[Error Issue] ${DateMap().get()} 쿼리 Bad 유효성 Good `)
    } else {
      console.log('OK & GOOD 에 해당 내용이 없습니다.')
    }
  }
}
