import { useRef } from 'react';
//modules
import Draggable from 'react-draggable';

//css
import './List.css';

export function List({ title }: { title: string }) {
  const nodeRef = useRef(null);
  return (
    <>
      <Draggable
        nodeRef={nodeRef}
        handle=".list-handle"
        bounds=".notes-list ul"
      >
        <li ref={nodeRef}>
          <div className="list-handle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="note-title">{title}</div>
        </li>
      </Draggable>
    </>
  );
}
