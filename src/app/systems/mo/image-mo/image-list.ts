import { SoarBuilder } from 'app/systems/atom/soar-atom'
import { ImageVo, ImageBo } from 'app/systems/mo/image-mo/image-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class ImageList implements StrategyType<ImageVo[]> {
  handle(args?: any): ImageVo[] {
    const arr: ImageVo[] = []
    console.log(' &&&&&&&&&&& array ', JSON.stringify(args))
    const len = args.length
    let i = 0
    for (; i < len; i++) {

      const x1 = args[i].id

      const soar = new SoarBuilder()
      .id(x1)
      .build()

      const to = new ImageBo()
      .soar(soar)
      .transform()


      const jo = to.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(jo))
      arr.push(jo)
    }
    return arr
  }
}
