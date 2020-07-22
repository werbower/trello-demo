import React from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';
import { CustomDragLayerContainer } from './styles';
import { Column } from './Column';

export const CustomDragLayer = () => {
    const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    return isDragging ? (
        <CustomDragLayerContainer>
            <div style={getItemStyles(currentOffset)}>
                <Column id={item.id} text={item.text} index={item.index} />
            </div>
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
