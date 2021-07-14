import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://involve.software/test_front/api/',
})

export const MainMethods = {
    getPayMethods() {
        return instance.get<PayMethodsResponse>('payMethods');
    },
    getCalculate(params: getCalculateQuery) {
        return instance.get<getCalculateResponse>('payMethods/calculate', {params: params});
    }
}
export type PayMethod = {
    id: number;
    name: string;
}
export type PayMethodsResponse = {
    invoice: PayMethod[];
    withdraw: PayMethod[];
}
export type getCalculateQuery = {
    base: 'invoice' | 'withdraw';
    amount: number;
    invoicePayMethod: number;
    withdrawPayMethod: number;
}
export type getCalculateResponse = {
    amount: number;
}
