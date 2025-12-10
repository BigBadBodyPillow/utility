import React, { useRef } from 'react';

//modules
import Draggable from 'react-draggable';

//css
import './List.css';

//iconss
// import BinIcon from '../../../Assets/icons/bin-svgrepo-com.svg';
// import { ReactElement as BinIcon } from '../../../assets/icons/BinIcon';
// import { BinIcon } from '../../assets/icons/BinIcon.tsx';
import { BinIcon } from '../../../assets/icons/BinIcon';

export function List({
  id,
  title,
  onSelect,
  active,
  // editingStatus,
  onDelete,
}: {
  id: string;
  title: string;
  onSelect: (id: string) => void;
  active?: boolean;
  // editingStatus?: boolean;
  onDelete?: () => void;
}) {
  // const [dragged, setDragged] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const justDraggedRef = useRef<boolean>(false);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef<boolean>(false);

  const MOVE_THRESHOLD = 8; // pixels
  const DRAG_DEBOUNCE_MS = 250;

  function handleSelect() {
    if (justDraggedRef.current) {
      justDraggedRef.current = false;
      return;
    }
    onSelect(id);
  }

  function handlePointerStart(clientX: number, clientY: number) {
    pointerStartRef.current = { x: clientX, y: clientY };
    movedRef.current = false;
  }

  function handlePointerMove(clientX: number, clientY: number) {
    const start = pointerStartRef.current;
    if (!start) return;
    const dx = Math.abs(clientX - start.x);
    const dy = Math.abs(clientY - start.y);
    if (dx > MOVE_THRESHOLD || dy > MOVE_THRESHOLD) {
      movedRef.current = true;
    }
  }

  function handlePointerEnd() {
    const moved = movedRef.current;
    pointerStartRef.current = null;
    movedRef.current = false;
    if (moved) {
      // treat as a drag — block immediate selection briefly
      justDraggedRef.current = true;
      window.setTimeout(() => (justDraggedRef.current = false), DRAG_DEBOUNCE_MS);
      return;
    }

    // it's a tap
    handleSelect();
  }

  function handleDeleteButtonActive() {
    const draggableDiv = nodeRef.current;
    if (!draggableDiv) return;

    const transform = draggableDiv.style.transform;
    const transformValue = Number(transform.slice(11, -3)); /* only the value*/
    const deleteButton =
      draggableDiv.nextElementSibling as HTMLButtonElement; /* sibling is the button*/

    if (transformValue <= 42) {
      deleteButton.style.zIndex = '-1';
      deleteButton.style.opacity = '0.7';
    } else {
      deleteButton.style.zIndex = '1';
      deleteButton.style.opacity = '1';
    }
  }

  return (
    <>
      <li
        // ref={nodeRef}
        className={active ? 'note-item active' : 'note-item'}
      >
        {/* <div className="list-handle">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div> */}

        <Draggable
          nodeRef={nodeRef}
          handle=".note-title"
          // handle=".list-handle"
          // bounds=".notes-list ul"
          axis="x"
          bounds={{ left: -50, right: 0 }}
          onStop={() => {
            handleDeleteButtonActive();
            justDraggedRef.current = true;
            window.setTimeout(() => (justDraggedRef.current = false), DRAG_DEBOUNCE_MS);
          }}
        >
          <div
            className="note-title"
            role="button"
            ref={nodeRef}
            onClick={handleSelect}
            onTouchStart={(e: React.TouchEvent) => {
              const t = e.touches && e.touches[0];
              if (t) handlePointerStart(t.clientX, t.clientY);
            }}
            onTouchMove={(e: React.TouchEvent) => {
              const t = e.touches && e.touches[0];
              if (t) handlePointerMove(t.clientX, t.clientY);
            }}
            onTouchEnd={() => handlePointerEnd()}
            onPointerDown={(e: React.PointerEvent) => handlePointerStart(e.clientX, e.clientY)}
            onPointerMove={(e: React.PointerEvent) => handlePointerMove(e.clientX, e.clientY)}
            onPointerUp={() => handlePointerEnd()}
          >
            {title ? title : 'untitled'}
          </div>
        </Draggable>
        {/* {editingStatus && (
            <div className="note-edit-icon" onClick={onDelete}>
              D
            </div>
          )} */}
        <button className="delete-button" onClick={onDelete}>
          {/* D */}
          <BinIcon width="1.3rem" className="binIcon" />
        </button>
      </li>
    </>
  );
}
