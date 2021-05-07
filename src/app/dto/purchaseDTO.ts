export default class purchaseDTO {
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

  get customerNo(): string {
    return this._customerNo;
  }

  set customerNo(value: string) {
    this._customerNo = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get details(): any {
    return this._details;
  }

  set details(value: any) {
    this._details = value;
  }
  constructor(date: string, customer: string, customerNo: string, total: number, details: any) {
    this._date = date;
    this._customer = customer;
    this._customerNo = customerNo;
    this._total = total;
    this._details = details;
  }
  private _date:string;
  private _customer:string;
  private _customerNo:string;
  private _total:number;
  private _details:any;
}
