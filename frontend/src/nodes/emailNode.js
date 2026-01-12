import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';
export const EmailNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="Send Email" handles={[{ type: 'target', position: Position.Left, id: 'trigger' }]}>
            <div>
                <label>To: <input type="email" placeholder="user@example.com" style={{ width: '100%' }} /></label>
            </div>
        </BaseNode>
    );
};