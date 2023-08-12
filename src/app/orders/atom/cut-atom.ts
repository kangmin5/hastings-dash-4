
export class CutAtom {
  constructor(
    public cancelId?: string,
    public appliedAt?: string // public payMethodEitherCashOrCard = '',
  ) // public threeDeliveryStatus = '',
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
  {}
}

export class CancelDto {
  protected cancelId?: string
  protected appliedAt?: string
  //   protected payMethodEitherCashOrCard: string;
  //   protected threeDeliveryStatus: string;
  //   protected transactionNumber: string;
  //   protected ordererName: string;
  //   protected invoiceNumber: string;
  //   protected courierReceiver: string;
  //   protected emergencyPhone: string;
  //   protected deliveryCategory: string;
  //   protected thisBagGlueSizeQty: string;
  //   protected thatBagGlueSizeQty: string;
  //   protected message: string;
  //   protected orderAmount: string;
  //   protected rewardPoint: string;

  constructor() {
    this.cancelId = ''
    this.appliedAt = ''
    // this.payMethodEitherCashOrCard = "";
    // this.threeDeliveryStatus = "";
    // this.transactionNumber = "";
    // this.ordererName = "";
    // this.invoiceNumber = "";
    // this.courierReceiver = "";
    // this.emergencyPhone = "";
    // this.deliveryCategory = "";
    // this.thisBagGlueSizeQty = "";
    // this.thatBagGlueSizeQty = "";
    // this.message = "";
    // this.orderAmount = "";
    // this.rewardPoint = "";
  }

  getCancelId(): string {
    return this.cancelId!
  }
  setCancelId(cancelId: string): void {
    this.cancelId = cancelId
  }
  getAppliedAt(): string {
    return this.appliedAt!
  }
  setAppliedAt(appliedAt: string): void {
    this.appliedAt = appliedAt
  }

  toJson() {
    return {
      cancelId: this.cancelId
    }
  }
}
