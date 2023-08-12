import { TroubleBuilder } from "./trouble-builder";

export class TroubleVo  {
  constructor(
    public troubleId?: string,

  ) {}

}

export function TroubleJson(troubleVo: TroubleVo) {
  return new TroubleBuilder()
  .troubleId(troubleVo.troubleId)
  .transform().toJson();
}
