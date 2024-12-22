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

export const IconContainer = styled.div<{$hasChildren: boolean, $color?: string, $size?: string}>`
    padding-left: ${props => props.$hasChildren ? '' : '20px'};
    svg{
        width: ${props => props.$size ?? '22px'};
        height: ${props => props.$size ?? '22px'};
        circle {
            fill: ${props => props.$color ?? '#ED3833'};
        }
    }
`

export const StatusIconContainer = styled.div<{ $color?: string, $size?: string}>`
    padding-left: 5px;
    svg{
        width: ${props => props.$size ?? '22px'};
        height: ${props => props.$size ?? '22px'};
        circle, path {
            fill: ${props => props.$color ?? '#ED3833'};
        }
    }
`

export const LabelButton = styled.button<{$isAsset?: boolean;}>`
    background: none;
    border: none;
    cursor: pointer;
`