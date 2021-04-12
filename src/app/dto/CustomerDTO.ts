export default class CustomerDTO{
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

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get number(): number {
    return this._number;
  }

  set number(value: number) {
    this._number = value;
  }
  constructor(id: string, name: string, address: string, value: number, number: number) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._value = value;
    this._number = number;
  }
 private _id:string;
 private _name:string;
 private _address:string;
 private _value:number;
 private _number:number;
}
