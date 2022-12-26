export enum ETableHeaderAction {
  'HEADER_SEARCH',
  'HEADER_ADD_RECORD',
  'HEADER_RELOAD'
}

export enum ETableRowAction {
  'ROW_EDIT',
  'ROW_DELETE',
  'ROW_CLONE',
  'ROW_GOTO',
  'ROW_OPEN_MODEL'
};

export enum ETableColumnAction {
  'COLUMN_SORT',
  'COLUMN_HIDE',
  'COLUMN_SHIFT_LEFT',
  'COLUMN_SHIFT_RIGHT',
  'COLUMN_LOOKUP'
}

export enum ETableCellAction {
  'CELL_EDIT',
  'CELL_DELETE',
  'CELL_OPEN_MODEL',
  'CELL_HIDE',
  'CELL_SHOW',
  'CELL_COPY',
  'CELL_GOTO'
};

export enum ETableCellEditType {
  'inline',
  'popout'
};

export enum ETableCellType {
  'image',
  'tags',
  'default'
}
