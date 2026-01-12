// src/nodes/inputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode'; // Hamara naya Master Component import kiya
import { useState } from 'react';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <BaseNode
      id={id}
      label="Input Node"
      handles={[
        { type: 'source', position: Position.Right, id: 'value' } // Sirf Right side connector hota hai Input ka
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
            value={inputType}
            onChange={handleTypeChange}
            style={{ width: '100%', padding: '4px', marginTop: '2px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};