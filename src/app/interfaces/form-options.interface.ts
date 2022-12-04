import { EFormOpenType, EFormElementType, EFormAction } from "@enums/form-options.enum";
import { ESize, EPosition } from "@enums/generic.enum";

export interface IFormAction {
  title?: string;
  icon?: string;
  color?: string;
  styleName?: string;
  actionName?: EFormAction;
  execute?: Function;
}

export interface IFormElement {
  label?: string;
  icon?: string;
  field?: string;
  type?: EFormElementType;
  width?: number; /* percentage */
  required?: boolean;
  disabled?: boolean;
}

export interface IFormRow {
  title?: string;
  elements?: IFormElement[];
}

export interface IFormTab {
  title?: string;
  rows?: IFormRow[];
}

export interface IFormOptions {
  openType?: EFormOpenType,
  header?: {
    title?: EPosition;
    actions?: {
      position?: string;
      values: IFormAction[];
    }
  }
  tabs?: IFormTab[];
  rows?: IFormRow[];
  size?: ESize;
  footer?: {
    actions?: {
      position?: EPosition;
      values: IFormAction[];
    }
  }
}
