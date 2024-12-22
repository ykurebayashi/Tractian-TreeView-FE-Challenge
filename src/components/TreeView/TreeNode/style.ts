import styled from "styled-components";

export const MainNodeContainer = styled.div`
    margin: 10px 0;
    padding-left: 20px;
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
`

export const LabelingElement = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 3px;
`

export const ExpandCondenseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export const IconContainer = styled.div<{$hasChildren: boolean}>`
    padding-left: ${props => props.$hasChildren ? '' : '13px'};
    svg{
        width: 22px;
        height: 22px;
    }
`

export const LabelButton = styled.button`
    display: flex;
    gap: 3px;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
`