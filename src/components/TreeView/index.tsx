import { TreeNode } from "./TreeNode";
import { NodeType } from "./types";

export const TreeView = ({ data }: { data: NodeType[] }) => {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};
