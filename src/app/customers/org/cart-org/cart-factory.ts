import { StrategyType } from 'app/utils/atom/strategy-atom'
import { CartStrategy } from './cart-union'
import { CartList } from 'app/customers/mo/cart-mo/cart-list'
import { CartVo } from 'app/customers/mo/cart-mo/cart-vo'

type Strategy = keyof typeof CartStrategy

const CartMap: { [_case in Strategy]: StrategyType<CartVo[]> } = {
  getAllCarts: new CartList(),
  getCartById: undefined,
  addCart: undefined,
  alterCartById: undefined,
  getCartsBy: undefined,
  getCartsByUser: undefined,
  delCartById: undefined
}

export class CartFactory {
  static create(_case: Strategy): StrategyType<CartVo[]> {
    const strategy = CartMap[_case]
    if (!strategy) console.log('1:1 질의응답 팩토리에 해당 전략이 없습니다. ')
    return strategy
  }
}
