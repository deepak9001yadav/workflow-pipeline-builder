// src/nodes/outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';
import { useState } from 'react';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <BaseNode
      id={id}
      label="Output Node"
      handles={[
        { type: 'target', position: Position.Left, id: 'value' } // Target Handle Left Side
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px' }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            style={{ width: '100%', padding: '4px', marginTop: '2px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
        <label style={{ fontSize: '12px' }}>
          Type:
          <select
            value={outputType}
            onChange={handleTypeChange}
            style={{ width: '100%', padding: '4px', marginTop: '2px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};