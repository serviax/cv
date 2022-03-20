export interface DropdownModel {
  noItemSelected: string,
  selectedItem?: DropdownMenuItemModel;
  items: DropdownMenuItemModel[];
}

export interface DropdownSelectionFunc {
  (element: DropdownMenuItemModel): void;
}

export interface DropdownMenuItemModel {
  icon?: string,
  value: string,
  key: string,
  onSelect?: DropdownSelectionFunc
}
