import { TroubleDto } from "./trouble-dto";
import { TroubleVo } from "./trouble-vo";

export class TroubleBuilder{
    private readonly instance: TroubleVo;

    constructor(){
        this.instance = {
            troubleId: "",
        };
    }
    troubleId(troubleId: string): TroubleBuilder {
        this.instance.troubleId = troubleId;
        return this;
    }
    build = (): TroubleVo => this.instance;
    transform = (): TroubleDto => {
        const troubleDto = new TroubleDto();
        troubleDto.setTroubleId(this.instance.troubleId);
        return troubleDto;
    }
}