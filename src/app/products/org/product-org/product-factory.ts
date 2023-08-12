import { ProductVo } from 'app/products/mo/product-mo/product-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { ProductStrategy } from './product-union'
import { ProductList } from '../../mo/product-mo/product-list'
import { ProductByMain } from '../../mo/product-mo/product-by-main'

type Strategy = keyof typeof ProductStrategy

const ProductMap: { [_case in Strategy]: StrategyType<ProductVo[]> } = {
  getAllProducts: new ProductList(),
  getProductById: undefined,
  addProduct: undefined,
  alterProductById: undefined,
  getProductsBy: undefined,
  delProductById: undefined,
  getProductsByMain: new ProductByMain()
}

export class ProductFactory {
  static create(_case: Strategy): StrategyType<ProductVo[]> {
    const strategy = ProductMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
