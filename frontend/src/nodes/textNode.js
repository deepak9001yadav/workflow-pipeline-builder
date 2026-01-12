// frontend/src/nodes/textNode.js

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../draggableNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  // 1. Text box size automatically adjust karne ka logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // 2. Variable `{{ name }}` detect karne ka logic
  useEffect(() => {
    // Regex to find text inside {{ }}. Example: {{ name }} -> matches "name"
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(variableRegex)];

    // Unique variables nikal rahe hain
    const newHandles = matches.map(match => match[1]);
    const uniqueHandles = [...new Set(newHandles)];

    setHandles(uniqueHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Text Node"
      // Right side ka output handle humesha rahega
      handles={[
        { type: 'source', position: Position.Right, id: 'output' },
        // Niche hum dynamic handles (variables) add karenge
        ...handles.map((handle, index) => ({
          type: 'target',
          position: Position.Left,
          id: handle,
          style: { top: `${(index + 1) * 20 + 50}%` } // Thoda gap dekar lagayenge
        }))
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '12px', color: '#666' }}>
          Text (Use <code>{'{{ var }}'}</code> for variables):
        </label>

        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '100%',
            minHeight: '80px',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            resize: 'none',
            overflow: 'hidden',
            fontFamily: 'monospace'
          }}
        />
      </div>
    </BaseNode>
  );
};