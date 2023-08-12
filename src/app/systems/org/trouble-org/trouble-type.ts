import { AxiosResponse } from 'axios'
import { TroubleVo } from './trouble-vo'
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface TroubleType extends CrudAxios<TroubleVo> {}
