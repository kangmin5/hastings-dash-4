export class TroubleDto{
    protected troubleId?: string;
    constructor(){
        this.troubleId = "";
    }
    getTroubleId(): string {
        return this.troubleId!;
    }
    setTroubleId(troubleId: string): void {
        this.troubleId = troubleId;
    }
    toJson() {
        return {
            troubleId: this.troubleId,
        };
    }
    fromJson(json: any): TroubleDto {
        this.troubleId = json.troubleId;
        return this;
    }
    
}