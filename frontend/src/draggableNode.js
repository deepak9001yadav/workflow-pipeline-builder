// draggableNode.js
// src/draggableNode.js

import { Handle, Position } from 'reactflow';

// Ye component baaki sab nodes ke liye ek wrapper (cover) ka kaam karega
export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div
      style={{
        width: 200,
        height: 'auto',
        border: '1px solid #1C2536', // Dark border
        borderRadius: '8px',
        background: 'white',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Node ka Title/Heading */}
      <div style={{
        padding: '8px 12px',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#f8f9fa',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
        fontWeight: 'bold',
        color: '#1C2536'
      }}>
        {label}
      </div>

      {/* Node ke andar ka maal (Input box, text etc.) */}
      <div style={{ padding: '12px' }}>
        {children}
      </div>

      {/* Handles (Connectors - Jahan se taar judenge) */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}       // "source" (right) ya "target" (left)
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            ...handle.style,
            width: 8, height: 8, background: '#7a48d6' // Purple dots
          }}
        />
      ))}
    </div>
  );
};
export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#1C2536',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      draggable
    >
      <span style={{ color: '#fff' }}>{label}</span>
    </div>
  );
};
