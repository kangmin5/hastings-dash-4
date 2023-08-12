import { ImageVo } from 'app/systems/mo/image-mo/image-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ImageStrategy } from './image-union'
import { ImageList } from 'app/systems/mo/image-mo/image-list'

type Strategy = keyof typeof ImageStrategy

const ImageMap: { [_case in Strategy]: StrategyType<ImageVo[]> } = {
  getAllCompanies: new ImageList(),
  getImageById: undefined,
  addImage: undefined,
  alterImageById: undefined,
  getCompaniesBy: undefined,
  delImageById: undefined
}

export class ImageFactory {
  static create(_case: Strategy): StrategyType<ImageVo[]> {
    const strategy = ImageMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
