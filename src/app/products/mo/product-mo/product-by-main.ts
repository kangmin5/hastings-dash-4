import { ProductVo, ProductBo } from 'app/products/mo/product-mo/product-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'

export class ProductByMain implements StrategyType<ProductVo[]> {
  handle(args?: any): ProductVo[] {
    const items: ProductVo[] = []
    const json = args.data.json
    console.log('&&&&&&&&&&& 전체 상품수량 : ', json.numberOfProducts)
    console.log('&&&&&&&&&&& 판매 상품수량 : ', json.numberOfSellingProducts)
    console.log('&&&&&&&&&&& 판매중단 상품수량 : ', json.numberOfStopSellingProducts)
    console.log('&&&&&&&&&&& 진열 상품수량 : ', json.numberOfDisplayedProducts)
    console.log('&&&&&&&&&&& 미진열 상품수량 : ', json.numberOfNotDisplayedProducts)

    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const json = new ProductBo().par(array[i].id).transform().toJson()

      // console.log(" &&&&&&&&&&& json ",JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}
