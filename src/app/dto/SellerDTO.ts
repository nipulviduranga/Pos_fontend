export default class SellerDTO {
  get totalValue(): number {
    return this._totalValue;
  }

  set totalValue(value: number) {
    this._totalValue = value;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }

  get paidValue(): number {
    return this._paidValue;
  }

  set paidValue(value: number) {
    this._paidValue = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  constructor(id: string, name: string, address: string, number: number, paidValue: number,totalValue:number, date: string, description: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._number = number;
    this._paidValue = paidValue;
    this._date = date;
    this._description = description;
    this._totalValue=totalValue;
  }
  private _id:string;
  private _name:string;
  private _address:string;
  private _number:number;
  private _paidValue:number;
  private _date:string;
  private _description:string;
  private _totalValue:number;
}
