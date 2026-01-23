export interface DropdownListType {
  name: string;
  url?: string;
  iconOptions: React.ReactNode;
}

export interface MenuItem {
  key: string;
  icon: React.ReactNode;
  title: string;
  url: string;
  value: string;
  submenuItems?: Array<MenuItem>;
}
