import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';
export const ApiNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="API Call" handles={[
            { type: 'target', position: Position.Left, id: 'request' },
            { type: 'source', position: Position.Right, id: 'response' }
        ]}>
            <div><span>POST /api/data</span></div>
        </BaseNode>
    );
};