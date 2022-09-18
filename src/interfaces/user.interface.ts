import { Roles } from '../enums/roles.enum';

export interface User {
    id?: string;
    firstName: string;
    lastName: string;
    role: Roles;
    address: UserAddress;
}

export interface UserAddress {
    country: string;
    city: string;
    street: string;
    house: number;
    apartment: number;
}
