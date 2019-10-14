import { Country } from './country';

export class Address
{
    id ?: number;
    city : string;
    country : Country;
    pincode : string;
}