
export class FreeVo {

  constructor(
    public freeId = '',
    public freeNo = '',
    public password = ''
    // public payMethodEitherCashOrCard = '',
    // public threeDeliveryStatus = '',
    // public transactionNumber = '',
    // public ordererName = '',
    // public invoiceNumber = '',
    // public courierReceiver = '',
    // public emergencyPhone = '',
    // public deliveryCategory = '',
    // public thisBagGlueSizeQty = '',
    // public thatBagGlueSizeQty = '',
    // public message = '',
    // public orderAmount = '',
    // public rewardPoint = ''
  ) {}


}

export class FreeDto{
  protected freeId?: string;
  protected freeNo?: string;
  protected password?: string;
  constructor(){
      this.freeId = "";
      this.freeNo = "";
      this.password = "";
  }
  getFreeId(): string {
      return this.freeId!;
  }
  setFreeId(freeId: string): void {
      this.freeId = freeId;
  }
  getFreeNo(): string {
      return this.freeNo!;
  }
  setFreeNo(freeNo: string): void {
      this.freeNo = freeNo;
  }
  getPassword(): string {
      return this.password!;
  }
  setPassword(password: string): void {
      this.password = password;
  }

  toJson() {
      return {
          freeId: this.freeId,
          freeNo: this.freeNo,
          password: this.password,
      };
  }
  fromJson(json: any): FreeDto {
      this.freeId = json.freeId;
      this.freeNo = json.freeNo;
      this.password = json.password;

      return this;
  }
  
}
export class FreeBuilder{
  private readonly instance: FreeVo;

  constructor(){
      this.instance = {
          freeId: "",
          freeNo: "",
          password: "",
      };
  }
  freeId(freeId: string): FreeBuilder {
      this.instance.freeId = freeId
      return this;
  }
  freeNo(freeNo: string): FreeBuilder {
      this.instance.freeNo = freeNo;
      return this;
  }
  password(password: string): FreeBuilder {
      this.instance.password = password;
      return this;
  }
  build = (): FreeVo => this.instance;
  transform = (): FreeDto => {
      const memberOrderDto = new FreeDto();
      memberOrderDto.setFreeId(this.instance.freeId);
      return memberOrderDto;
  }
}