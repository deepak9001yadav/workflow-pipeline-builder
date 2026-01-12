import { BaseNode } from '../draggableNode';
export const NoteNode = ({ id, data }) => {
    return (
        <BaseNode id={id} label="Note" handles={[]}>
            <div style={{ padding: '10px', background: '#fff9c4', borderRadius: '5px' }}>
                <textarea placeholder="Write notes here..." style={{ border: 'none', background: 'transparent', width: '100%', resize: 'none' }} />
            </div>
        </BaseNode>
    );
};