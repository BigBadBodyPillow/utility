import { useRef } from 'react';

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
        onClick={() => onSelect(id)}
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
          onStop={handleDeleteButtonActive}
        >
          <div className="note-title" role="button" ref={nodeRef}>
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
