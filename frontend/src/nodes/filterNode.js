import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';
export const FilterNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="Filter" handles={[
            { type: 'target', position: Position.Left, id: 'in' },
            { type: 'source', position: Position.Right, id: 'out' }
        ]}>
            <div><span>Filter: Contains "Error"</span></div>
        </BaseNode>
    );
};