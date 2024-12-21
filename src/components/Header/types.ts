export type HeaderProps = {
    onClick?: (param: string) => void;
    current?: string | null;
    locations: { id: string; name: string }[];
  };
  