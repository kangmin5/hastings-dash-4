export class AjaxVo {
  constructor(
    public headers?: object,
    public data?: string,
    public method?: string,
    public url?: string,
  ) {}
}
