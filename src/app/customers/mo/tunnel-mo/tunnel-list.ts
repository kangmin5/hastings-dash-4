import { TunnelVo, TunnelTo } from 'app/customers/mo/tunnel-mo/tunnel-vo'
import { StrategyType } from 'app/utils/atom/strategy-atom'
import { FunnelBuilder } from 'app/customers/atom/funnel-atom'
import { ArticleBuilder } from 'app/boards/atom/article-atom'

export class TunnelList implements StrategyType<TunnelVo[]> {
  handle(args?: any): TunnelVo[] {
    const items: TunnelVo[] = []
    const array = args.data.array
    console.log(' &&&&&&&&&&& array ', JSON.stringify(array))
    const len = array.length
    let i = 0
    for (; i < len; i++) {
      
      const funnel = new FunnelBuilder().build()

      const article = new ArticleBuilder().build()

      const instance = new TunnelTo()
      instance.setFunnel(funnel)
      instance.setArticle(article)

      const json = instance.toJson()

      console.log(' &&&&&&&&&&& json ', JSON.stringify(json))
      items.push(json)
    }
    return items
  }
}
