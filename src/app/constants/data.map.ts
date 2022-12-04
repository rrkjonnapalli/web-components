import { get as lget } from 'lodash';
import { EPageSize } from '../enums/generic.enum';

const FLMap = {
  dob: 'Birth Date'
};

export const getFieldLabel = (key: string) => {
  return lget(FLMap, key, null);
}

export const FieldLabelMap = {
  get: getFieldLabel
};

export const getPageSize = (size: EPageSize): number => {
  switch (size) {
    case EPageSize.U100:
      return 100;
    case EPageSize.U50:
      return 50;
    case EPageSize.U25:
      return 25;
    default:
      return 10;
  }
}
