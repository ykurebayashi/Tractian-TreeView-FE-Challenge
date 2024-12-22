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
  LabelButton,
} from "./style";
import { NodeIcons } from "./constants";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  const toggleNode = () => setIsOpen(!isOpen);

  return (
    <MainNodeContainer>
      <LabelingElement>
        {hasChildren && (
          <ExpandCondenseButton onClick={toggleNode}>
            {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </ExpandCondenseButton>
        )}
        <IconContainer $hasChildren={hasChildren}>
          {NodeIcons[node.type]}
        </IconContainer>
        <LabelButton>
          <Text>{node.name}</Text>
        </LabelButton>
      </LabelingElement>
      {isOpen && <TreeView data={node?.children} />}
    </MainNodeContainer>
  );
};
