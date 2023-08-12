
export class DealAtom {
    constructor(
      public dealKind?: string,
      public question?: string,

    ) {}
  }



  export class DealDto {
    protected dealKind?: string;
    protected question?: string;


    constructor() {
      this.dealKind = "";
      this.question = "";

    }

    toJson() {
      return {
        dealKind: this.dealKind,
        question: this.question,

      };
    }

  }

  export class DealBuilder {
    private readonly instance: DealAtom;
    constructor() {
      this.instance = {
        dealKind: "",
        question: "",

      };
    }

    dealKind(dealKind: string): DealBuilder {
      this.instance.dealKind = dealKind;
      return this;
    }
    question(question: string): DealBuilder {
      this.instance.question = question;
      return this;
    }

    transform(): DealDto {
      const dealDto = new DealDto();
      //**TODO */
      return dealDto;
    }
    build(): DealAtom {
      return this.instance;
    }

  }
