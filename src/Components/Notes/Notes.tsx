//css
import './Notes.css';

//components
import { List } from './list/List';

export function Notes() {
  return (
    <>
      <div className="notes">
        <div className="notes-list">
          <ul>
            <List title="first note" />
            <List title="second note" />
            <List title="third note" />
            <List title="fourth note" />
          </ul>
          <div className="add-section">
            <button className="add-notes">Add Note</button>
          </div>
        </div>
        <div className="notes-edit">asd</div>
      </div>
    </>
  );
}
