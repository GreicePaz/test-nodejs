export interface Product {
  sku: number;
  name: string;
  inventory: Inventory;
  isMarketable?: boolean;
}

export interface Inventory {
  quantity?: number;
  warehouses: Warehouse[];
}

export interface Warehouse {
  locality: string;
  quantity: number;
  type: string;
}
