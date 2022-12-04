import { faker } from '@faker-js/faker';
import { Observable, of } from 'rxjs';
import { Post } from '../interfaces/demo/post.interface';
import { User } from '../interfaces/demo/user.interface';
import { ITableCell, ITableColumn } from '../interfaces/table-options.interface';


export interface ColumnCellOutput {
  columns: ITableColumn[];
  cells: ITableCell[]
}

export interface TableOptionGenFnInput {
  columns: ITableColumn[];
  cells: ITableCell[];
  title: string;
}

export const generateUser = () => {
  let record: User = {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    createdAt: faker.date.past(),
    dob: faker.date.past(2000),
    email: faker.internet.email(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    gender: faker.name.gender(),
    mobile: faker.phone.number(),
    address: {
      city: faker.address.cityName(),
      street: faker.address.street(),
      flat: faker.address.buildingNumber(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return record;
};

export const getColumnsAndCells = (schema: any): ColumnCellOutput => {
  const columns: ITableColumn[] = Object.entries(schema).map(([k, v]) => ({
    columnName: k,
    ...(typeof v === 'object' ? v : {}),
    noactions: true,
  }));
  const cells: ITableCell[] = columns.map((c) => {
    const type = c.columnName && schema[c.columnName].element ? schema[c.columnName].element : undefined;
    return {
      field: c.columnName ? [c.columnName] : [],
      ...(type ? { type } : {})
    };
  });
  return {
    columns,
    cells
  }
}

export const generate = {
  users: (count: number): Observable<User[]> => {
    let users: User[] = [];
    for (let i = 0; i < count; i++) {
      let record = generateUser();
      users.push(record);
    }
    return of(users);
  },
  posts: (count: number): Observable<Post[]> => {
    let posts: Post[] = [];
    for (let i = 0; i < count; i++) {
      let record: Post = {
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraphs(),
        createdAt: faker.date.past(),
        location: {
          city: faker.address.cityName(),
          street: faker.address.street(),
          flat: faker.address.buildingNumber(),
          zipcode: faker.address.zipCode(),
          country: faker.address.country()
        },
        tags: faker.lorem.slug(faker.datatype.number({ max: 20, precision: 1 })).split('-'),
        user: generateUser()
      };
      posts.push(record);
    }
    return of(posts);
  }
};
