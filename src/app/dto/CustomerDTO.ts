export default class CustomerDTO{
  private _name:string;
  private _address:string;
  private _salary:number;
  private _image:string;
  private _other:Array<any>;


  constructor(name: string, address: string, salary: number, image: string, other: Array<any>) {
    this._name = name;
    this._address = address;
    this._salary = salary;
    this._image = image;
    this._other = other;

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

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get other(): Array<any> {
    return this._other;
  }

  set other(value: Array<any>) {
    this._other = value;
  }
}
