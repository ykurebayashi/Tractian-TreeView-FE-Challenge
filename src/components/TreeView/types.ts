export type NodeType = {
    id: string;
    name: string;
    type: "location" | "asset" | "component";
    children: NodeType[];
  };