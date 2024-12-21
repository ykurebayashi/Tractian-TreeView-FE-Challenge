export type HeaderProps = {
    onClick?: (param: { id: string; name: string }) => void;
    current?: { id: string; name: string } | null;
    locations: { id: string; name: string }[];
  };
  