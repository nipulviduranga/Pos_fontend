export default class purchaseHistoryDTO {
  private _date:string;
  private _customer:string;
  private _total:number;
  private _paidVal:number;
  private _list:any;

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get customer(): string {
    return this._customer;
  }

  set customer(value: string) {
    this._customer = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get paidVal(): number {
    return this._paidVal;
  }

  set paidVal(value: number) {
    this._paidVal = value;
  }

  get list(): any {
    return this._list;
  }

  set list(value: any) {
    this._list = value;
  }

  constructor(date: string, customer: string, total: number, paidVal: number, list: any) {
    this._date = date;
    this._customer = customer;
    this._total = total;
    this._paidVal = paidVal;
    this._list = list;
  }
}
