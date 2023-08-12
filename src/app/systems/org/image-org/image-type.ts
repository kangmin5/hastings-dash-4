import { ImageVo } from 'app/systems/mo/image-mo/image-vo'
import { CrudAxios } from 'app/utils/mo/collection-mo/crud-axios'

export interface ImageType extends CrudAxios<ImageVo> {}
