
export class Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availableStockCount: string;

  constructor(id: number, name: string, description: string, price: string, availableStockCount: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.availableStockCount = availableStockCount;
  }
}
