
import { ESize, EAppDataSource } from '@enums/generic.enum';
import {
  ETableCellType,
  ETableRowAction,
  ETableCellEditType,
  ETableCellAction,
  ETableColumnAction,
  ETableHeaderAction
} from '@enums/table-options.enum';

export interface ITableAction {
  title?: string;
  label?: string;
  icon?: string;
  color?: string;
  styleName?: string;
  actionName?: ETableCellAction | ETableColumnAction | ETableRowAction | ETableHeaderAction;
  execute?: Function;
  source?: EAppDataSource
}

export interface TableCellEditAction extends ITableAction {
  editType?: ETableCellEditType;
}

export interface TableColumnAutoRunAction extends ITableAction {
  autorrun?: boolean;
  hidden?: boolean;
}

export interface ITableHeaderQuickFilter {
}

export interface ITableHeader {
  title?: string;
  simplesearch?: boolean;
  columnsearch?: boolean;
  advancedsearch?: boolean;
  quickfilters?: ITableHeaderQuickFilter[];
  actions?: ITableAction[];
}

export interface ITableColumn {
  label?: string;
  columnName?: string;
  icon?: string;
  color?: string;
  size?: ESize;
  sortable?: boolean;
  noactions?: boolean;
  actions?: ITableAction[];
}

export interface ITableCellLookup {
  source: EAppDataSource;
  ref: string;
  query: {
    variable: object;
    fixed: object;
  },
  select?: string[];
  seperator?: string;
}

export interface ITableCell {
  field?: string[];
  seperator?: string;
  type?: ETableCellType;
  lookup?: ITableCellLookup;
  pipe?: string;
  icon?: string;
  color?: string;
  actions?: ITableAction[]
}

export interface ITablePagination {
}

export interface ITableCounters {
}

export interface ITableOptions {
  linenumbers?: boolean;
  sortable?: boolean;
  header?: ITableHeader;
  actions?: {
    row?: ITableAction[];
    cell?: ITableAction[];
    column?: ITableAction[];
  }
  columns: ITableColumn[];
  cells: ITableCell[];
  uri: {
    default?: string;
    create?: string;
    read?: string;
    update?: string;
    delete?: string;
  },
  footer?: {
    pagination?: ITablePagination;
    counters?: ITableCounters;
  }
}
