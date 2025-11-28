import { useState } from 'react';

//css
import './Notes.css';
import './quillOverwrites.css';

//components
import { List } from './list/List';

//modules
import { PrimeReactProvider } from 'primereact/api';
import { Editor } from 'primereact/editor';
// import 'primereact/resources/themes/lara-light-cyan/theme.css';

export function Notes() {
  const [text, setText] = useState('');

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
        <PrimeReactProvider
        // value={{ unstyled: true }}
        >
          <div className="notes-edit">
            <div className="title-section">
              <input
                type="text"
                className="note-editor-title focus-visible "
                placeholder="add a title for your note"
              />
            </div>
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue || '')}
              style={
                {
                  // maxHeight: '875px',
                }
              }
            />
          </div>
        </PrimeReactProvider>
      </div>
    </>
  );
}
