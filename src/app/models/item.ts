import { Merchant } from './merchant';

export class Item {

    id ?: number;
    name : string;
    quantity : number;
    price : number;
    merchant ?: Merchant;
    
}
