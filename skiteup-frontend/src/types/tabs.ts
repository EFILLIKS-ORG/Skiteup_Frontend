export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab?: string;
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}
