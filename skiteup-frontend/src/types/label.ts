export type LabelOption =
  | string
  | {
      label: string;
      value: string;
      disabled?: boolean;
    };

export interface BaseLabelSelectProps {
  options: LabelOption[];
  label?: string;
  disabled?: boolean;
  className?: string;
}

export interface SingleLabelSelectProps extends BaseLabelSelectProps {
  multiple?: false;
  value?: string;
  onChange?: (value: string) => void;
}

export interface MultiLabelSelectProps extends BaseLabelSelectProps {
  multiple: true;
  value?: string[];
  onChange?: (value: string[]) => void;
}

export type LabelProps = SingleLabelSelectProps | MultiLabelSelectProps;
