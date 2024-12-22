export type NodeType = {
    id: string;
    name: string;
    type: "location" | "asset" | "component";
    children: NodeType[];
    parentId?: string,
    sensorId?: string,
    sensorType?:string,
    status?: string,
    gatewayId?: string,
    locationId?: string
  };