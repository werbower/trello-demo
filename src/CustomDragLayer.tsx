import React from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';
import { Column } from './Column';
import { CustomDragLayerContainer } from './styles';

export const CustomDragLayer = () => {
    const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    return isDragging ? (
        <CustomDragLayerContainer style={getItemStyles(currentOffset)}>
            <Column id={item.id} text={item.text} index={item.index} isPreview={true} />
        </CustomDragLayerContainer>
    ) : null;
};

function getItemStyles(currentOffset: XYCoord | null): React.CSSProperties {
    if (!currentOffset) {
        return { display: 'none' };
    }
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return { transform, WebkitTransform: transform };
}
