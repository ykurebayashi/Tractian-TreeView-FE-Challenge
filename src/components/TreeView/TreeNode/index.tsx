import { useState } from "react";
import { NodeType } from "../types";
import { TreeView } from "..";
import { ChevronDown, ChevronUp } from "react-feather";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNode = () => setIsOpen(!isOpen);

  return (
    <div>
      {node.children && (
        <button onClick={toggleNode}>
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </button>
      )}
      <span>{node.name}</span>
      {isOpen && <TreeView data={node?.children} />}
    </div>
  );
};
