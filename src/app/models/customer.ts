import { User } from './user';
import { Address } from './address';

export class Customer {
    id?: number;
    name: string;
    phone_number: number;
    address?: Address;
    user?: User;
}