import { ProductVo } from "app/products/mo/product-mo/product-vo";

export class ReturnApplyVo  {
  constructor(
    public returnApplyId?: string,
    public count?: string,

  ) {}

}

export class ReturnApplyDto{
  protected returnApplyId?: string;
  protected count?: string;

  constructor(){
      this.returnApplyId = "";
  }
  getReturnApplyId(): string {
      return this.returnApplyId!;
  }
  setReturnApplyId(returnApplyId: string): void {
      this.returnApplyId = returnApplyId;
  }
  getCount(): string {
      return this.count!;
  }
  setCount(count: string): void {
      this.count = count;
  }
  
  setProductDto(vo: ProductVo): void {
      

  }
  

  toJson() {
      return {
          returnApplyId: this.returnApplyId,
      };
  }
  fromJson(json: any): ReturnApplyDto {
      this.returnApplyId = json.returnApplyId;
      return this;
  }
  
}
export class ReturnApplyBuilder{
  private readonly instance: ReturnApplyVo;

  constructor(){
      this.instance = {
          returnApplyId: "",
      };
  }
  returnApplyId(returnApplyId: string): ReturnApplyBuilder {
      this.instance.returnApplyId = returnApplyId 
      return this;
  }
  build = (): ReturnApplyVo => this.instance;
  transform = (): ReturnApplyDto => {
      const returnApplyDto = new ReturnApplyDto();
      returnApplyDto.setReturnApplyId(this.instance.returnApplyId);
      return returnApplyDto;
  }
}