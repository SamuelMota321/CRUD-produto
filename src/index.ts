import { IProduct, ICreateProductData, IUpdateProductData, IProductService } from './interfaces';

class ProductList implements IProductService {
    private productList: IProduct[] = [];
    private nextId: number = 1;

    createProduct(data: ICreateProductData): IProduct {
        const newProduct: IProduct = {
            id: this.nextId++,
            name: data.name,
            price: data.price,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.productList.push(newProduct);
        return newProduct;
    }

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
        return this.productList.find(product => product.id === id);
    }

    updateProduct(id: number, data: IUpdateProductData): IProduct {
        const product = this.getOneProduct(id);
        if (!product) {
            throw new Error('Product not found');
        }

        if (data.name !== undefined) {
            product.name = data.name;
        }
        if (data.price !== undefined) {
            product.price = data.price;
        }
        product.updatedAt = new Date();
        return product;
    }

    deleteProduct(id: number): { message: string } {
        const productIndex = this.productList.findIndex(product => product.id === id);
        
        this.productList.splice(productIndex, 1);
        return { message: 'Product successfully deleted.' };
    }
}

export const productList = new ProductList();


