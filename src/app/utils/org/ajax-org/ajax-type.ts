// import Ajax from '../../../../systems/chain/restful/model'

import { AjaxVo } from './ajax-vo'

export interface AjaxType {
  createHeaders(contentType: string): object
  createCurrentAPI(parameter: AjaxVo): AjaxVo
  http({ method, url, data }: any): AjaxVo
}
