import { useState } from "react";
import { NodeType } from "../types";
import { TreeView } from "..";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNode = () => setIsOpen(!isOpen);

  return (
    <div>
      {node.children && (
        <button onClick={toggleNode}>{isOpen ? "close" : "open"}</button>
      )}
      <span>{node.name}</span>
      {isOpen && <TreeView data={node?.children} />}
    </div>
  );
};
