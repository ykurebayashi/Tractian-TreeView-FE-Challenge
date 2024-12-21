import { useState } from "react";
import { NodeType } from "../types";
import { TreeView } from "..";
import { ChevronDown, ChevronUp } from "react-feather";
import {
  MainNodeContainer,
  Text,
  LabelingElement,
  ExpandCondenseButton,
} from "./style";
import { NodeIcons } from "./constants";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNode = () => setIsOpen(!isOpen);

  return (
    <MainNodeContainer>
      <LabelingElement>
        {node.children && (
          <ExpandCondenseButton onClick={toggleNode}>
            {isOpen ? <ChevronDown size={10} /> : <ChevronUp size={10} />}
          </ExpandCondenseButton>
        )}
        {NodeIcons[node.type]}
        <Text>{node.name}</Text>
      </LabelingElement>
      {isOpen && <TreeView data={node?.children} />}
    </MainNodeContainer>
  );
};
