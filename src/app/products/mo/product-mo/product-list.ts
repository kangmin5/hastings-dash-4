import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ProductBo, ProductVo } from 'app/products/mo/product-mo/product-vo'
import { ParAtom, ParBuilder } from 'app/products/atom/par-atom'
import { TimeBuilder } from 'app/utils/atom/time-atom'
import { CatBuilder } from 'app/products/atom/cat-atom'
import { FacetBuilder } from 'app/products/atom/facet-atom'
import { PriceBuilder } from 'app/products/atom/price-atom'
// import {uuidGen} from "app/utils/atoms/id-atom/uuid-gen";

export class ProductList implements StrategyType<ProductVo[]> {
  handle(args?: any): ProductVo[] {
    const items: ProductVo[] = []
    const data = args.data
    // console.log("&&&&&&&&&&& 데이터 : ",JSON.stringify(data))
    /**
  	object		{12}
        productId	:	2vdrhjw4tp
        imageUrl	:	null
        serialNumber	:	7172557639
        name	:	신규더미인쇄봉투 10*20+5
        category	:	주문제작 > 분류미지정 > 분류미지정 > 분류미지정
        isDisplayed	:	Y
        isSelling	:	Y
        price	:	주문에 따라 정해집니다
        numberOfOrders	:	0건
        viewCount	:	0건
        createdAt	:	2023-06-01 13:11:25
        updatedAt	:	2023-06-01 13:11:25
    */
    const array = args.data.array
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      const productId = array[i].productId
      const serialNumber = array[i].serialNumber
      const imageUrl = array[i].imageUrl
      const name = array[i].name
      const category = array[i].category
      const isDisplayed = array[i].isDisplayed
      const isSelling = array[i].isSelling
      const p = array[i].price
      const numberOfOrders = array[i].numberOfOrders
      const viewCount = array[i].viewCount
      const createdAt = array[i].createdAt
      const updatedAt = array[i].updatedAt

      const par = new ParBuilder()
      .id(productId)
      .serial(serialNumber)
      .imageUrl(imageUrl)
      .name(name)
      .viewCount(viewCount)
      .build()

      const facet = new FacetBuilder()      
      .isDisplayed(isDisplayed)
      .isSelling(isSelling)
      .orderCount(numberOfOrders)
      .build()

      const price = new PriceBuilder()
      .unitPrice(p)
      .build()

      const cat = new CatBuilder()
      .category(category)
      .build()

      const time = new TimeBuilder()
      .createdAt(createdAt)
      .updatedAt(updatedAt)
      .build()

      const product = new ProductBo()
      .par(par)
      .facet(facet)
      .price(price)
      .cat(cat)
      .time(time)
      .transform()
      .toJson()

      const product2 = {
        productId: serialNumber,
        imageUrl: imageUrl,
        serialNumber: serialNumber,
        name: name,
        category: category,
        isDisplayed: isDisplayed,
        isSelling: isSelling,
        price: price,
        numberOfOrders: numberOfOrders,
        viewCount: viewCount,
        createdAt: createdAt,
        updatedAt: updatedAt
      }

      items.push(product)
    }
    return items
  }
}
