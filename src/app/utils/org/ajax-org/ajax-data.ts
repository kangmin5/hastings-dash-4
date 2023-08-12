import { AjaxRouter } from './ajax-router'
import { AjaxVo } from './ajax-vo'

export class AjaxData {
  private static instance: AjaxData
  private router: AjaxRouter

  private constructor() {
    this.router = AjaxRouter.new()
  }

  static stream() {
    if (!AjaxData.instance) {
      AjaxData.instance = new AjaxData()
    }

    return AjaxData.instance
  }

  connect = () => this.router
}
export { AjaxVo, AjaxRouter }
