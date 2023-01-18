export interface Option {
  value: string;
  label: string;
  emoji?: string;
}

export interface Props {
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  label: string;
}