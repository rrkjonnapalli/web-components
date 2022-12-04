import { Entity } from "./entity.interface";
import { Address, User } from "./user.interface";

export interface Post extends Entity {
  user?: User;
  text?: string;
  createdAt?: Date;
  title?: string;
  tags?: string[];
  location?: Address;
}
