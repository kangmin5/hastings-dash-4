export class HopeAtom  {
    constructor(
        public wishId?: string,
    ){}
}


export class HopeDto{
    protected wishId?: string;

    constructor(){
        this.wishId = "";
    }

    getWishId(): string {
        return this.wishId;
    }

    setWishId(wishId: string): void {
        this.wishId = wishId;
    }
    toJson() {
        return {
            wishId: this.wishId,
        };
    }
    fromJson(json: any): HopeDto {
        this.wishId = json.wishId;
        return this;
    }

    
    

}
export class HopeBuilder{

    private readonly instance: HopeAtom;

    constructor() {
        this.instance = {
            wishId: "",
        };
    }
    wishId(wishId: string): HopeBuilder {
        this.instance.wishId = wishId 
        return this;
    }
    build = (): HopeAtom => this.instance;
    transform = (): HopeDto => {
        const wishDto = new HopeDto();
        wishDto.setWishId(this.instance.wishId);
        return wishDto;
    }
}