import { Injectable } from '@angular/core';
import { EEntity } from '@enums/demo/entity.enum';
import { ITableCell, ITableColumn, ITableOptions } from '@src/app/interfaces/table-options.interface';
import { generate, getColumnsAndCells, TableOptionGenFnInput } from '@utils/data-generator';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  __sendTableOptions({ cells, columns, title }: TableOptionGenFnInput): Observable<ITableOptions> {
    const options = {
      linenumbers: true,
      cells,
      columns,
      header: {
        title
      },
      uri: {},
      footer: {
        pagination: true
      }
    };
    return of(options);
  }

  getSchema(collection: EEntity): Observable<ITableOptions> {
    const AddressSchema = {
      flat: { type: 'string' },
      street: { type: 'string' },
      city: { type: 'string' },
      state: { type: 'state' },
      zipcode: { type: 'number' },
      country: { type: 'string' }
    };
    const UserSchema = {
      id: { type: 'string' },
      email: { type: 'string' },
      avatar: { type: 'string', element: 'avatar' },
      dob: { type: 'date' },
      createdAt: { type: 'date' },
      firstname: { type: 'string' },
      lastname: { type: 'string' },
      mobile: { type: 'string' },
      gender: { type: 'string' },
      address: { type: 'object', element: 'dialog', schema: AddressSchema }
    };
    const PostSchema: any = {
      user: { type: 'object', schema: UserSchema },
      text: { type: 'string', element: 'dialog', label: 'Details' },
      title: { type: 'string' },
      createdAt: { type: 'date' },
      tags: { type: 'array', elements: 'chips' },
      location: { type: 'string' }
    }
    let title = 'Table';
    let columns: ITableColumn[] = [];
    let cells: ITableCell[] = [];
    switch (collection) {
      case EEntity.post: {
        title = 'Posts';
        ({ columns, cells } = getColumnsAndCells(PostSchema));
        break;
      }
      default: {
        title = 'Users';
        ({ columns, cells } = getColumnsAndCells(UserSchema));
        break;
      }
    }
    return this.__sendTableOptions({
      cells,
      columns,
      title
    });
  }

  generate(collection: EEntity): Observable<any[]> {
    switch (collection) {
      case EEntity.post:
        return generate.posts(100);
      default:
        return generate.users(100);
    }
  }
}
