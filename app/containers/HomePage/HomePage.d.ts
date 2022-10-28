import internal from "assert";

export interface ProductIdInpit{
    productId: String;
}

export interface ProductList{
    id: string;
    productName: string;
}

export interface BidData {
    id: string;
    productId: string;
    bidAmount: string;
    bidDate: string;
    createdBy: string;
}

export interface Product {
    bidEndDate: string;
    categoryID: string;
    createdBy: string;
    detailedDescription: string;
    id: string;
    productName: string;
    shortDescription: string;
    startingPrice: string;
}

export interface productDetails {
    product: Product;
    bidData: BidData[];
}

export interface SuccessProductMessage{
    message: String;
}