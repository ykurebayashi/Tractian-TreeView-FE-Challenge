import { useState } from "react";
import { NodeType } from "../types";
import { TreeView } from "..";
import { ChevronDown, ChevronUp } from "react-feather";
import {
  MainNodeContainer,
  Text,
  LabelingElement,
  ExpandCondenseButton,
  IconContainer,
} from "./style";
import { NodeIcons } from "./constants";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNode = () => setIsOpen(!isOpen);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <MainNodeContainer>
      <LabelingElement>
        {hasChildren && (
          <ExpandCondenseButton onClick={toggleNode}>
            {isOpen ? <ChevronDown size={10} /> : <ChevronUp size={10} />}
          </ExpandCondenseButton>
        )}
        <IconContainer $hasChildren={hasChildren}>
          {NodeIcons[node.type]}
        </IconContainer>
        <Text>{node.name}</Text>
      </LabelingElement>
      {isOpen && <TreeView data={node?.children} />}
    </MainNodeContainer>
  );
};
