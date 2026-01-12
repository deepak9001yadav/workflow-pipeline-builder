// src/nodes/llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      label="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } }, // 1st Input
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } }, // 2nd Input
        { type: 'source', position: Position.Right, id: 'response' } // Output
      ]}
    >
      <div style={{ fontSize: '12px' }}>
        <span>This is a LLM.</span>
      </div>
      <div style={{ fontSize: '12px', marginTop: '10px', color: '#666' }}>
        <span>System | Prompt</span>
      </div>
    </BaseNode>
  );
};