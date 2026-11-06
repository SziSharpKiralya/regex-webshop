export class OrderDto {
    id: number;
    productId: number;
    customerName: string;
    billingAddress: string;
    shippingAddress: string;
    phoneNumber: string;
    
    cardNumber: string;
    expiryDate: string;
    cvv: string;
}