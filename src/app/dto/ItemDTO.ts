export default class ItemDTO {
  private _seller:string;

  get seller(): string {
    return this._seller;
  }

  set seller(value: string) {
    this._seller = value;
  }

  private _mesureType:string;

  get mesureType(): string {
    return this._mesureType;
  }

  set mesureType(value: string) {
    this._mesureType = value;
  }

  constructor(id: string, name: string, buyingPrice: number, sellingPrice: number, quantity: number, mesureType:string, seller:string) {
    this._id = id;
    this._name = name;
    this._buyingPrice = buyingPrice;
    this._sellingPrice = sellingPrice;
    this._quantity = quantity;
    this._mesureType = mesureType;
    this._seller = seller;
  }

  private _id:string;
  private _name:string;
  private _buyingPrice:number;
  private _sellingPrice:number;
  private _quantity:number;

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

  get buyingPrice(): number {
    return this._buyingPrice;
  }

  set buyingPrice(value: number) {
    this._buyingPrice = value;
  }

  get sellingPrice(): number {
    return this._sellingPrice;
  }

  set sellingPrice(value: number) {
    this._sellingPrice = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }
}
