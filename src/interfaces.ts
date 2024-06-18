export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICreateProductData {
    name: string;
    price: number;
}

export interface IUpdateProductData {
    name?: string;
    price?: number;
}

export interface IProductService {
    createProduct(data: ICreateProductData): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: IUpdateProductData): IProduct;
    deleteProduct(id: number): { message: string };
}
