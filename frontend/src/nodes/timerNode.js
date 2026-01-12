import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';
export const TimerNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="Timer" handles={[
            { type: 'target', position: Position.Left, id: 'in' },
            { type: 'source', position: Position.Right, id: 'out' }
        ]}>
            <div><span>Delay: 1000ms</span></div>
        </BaseNode>
    );
};