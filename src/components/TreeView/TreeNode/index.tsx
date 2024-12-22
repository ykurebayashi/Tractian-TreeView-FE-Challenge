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
  StatusIconContainer,
} from "./style";
import { NodeIcons } from "./constants";
import Bolt from "../../../assets/bolt-icon.svg";
import Dot from "../../../assets/dot-icon.svg";

export const TreeNode = ({ node }: { node: NodeType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;

  const toggleNode = () => setIsOpen(!isOpen);

  const getIcon = (type: "energy" | "vibration" | string) => {
    if (type === "energy") {
      return (
        <StatusIconContainer
          $size="15px"
          $color={node?.status === "operating" ? "green" : "red"}
        >
          <Bolt />
        </StatusIconContainer>
      );
    }
    return (
      <StatusIconContainer
        $size="8px"
        $color={node?.status === "operating" ? "green" : "red"}
      >
        <Dot />
      </StatusIconContainer>
    );
  };

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
        <LabelButton $isAsset={node.type === "component"}>
          <Text>{node.name}</Text>
        </LabelButton>
        {node?.sensorType && getIcon(node?.sensorType)}
      </LabelingElement>
      {isOpen && <TreeView data={node?.children} />}
    </MainNodeContainer>
  );
};
