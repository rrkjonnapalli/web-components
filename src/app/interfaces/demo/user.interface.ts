import { Entity } from "./entity.interface";

export interface Address {
  flat?: string;
  street?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country?: string;
}

export interface User extends Entity {
  id?: string;
  email?: string;
  avatar?: string;
  dob?: Date;
  createdAt?: Date;
  firstname?: string;
  lastname?: string;
  address?: Address;
  mobile?: string;
  gender?: string;
}
