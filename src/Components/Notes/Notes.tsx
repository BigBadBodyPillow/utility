import { useState, useRef, useEffect } from 'react';

//css
import './Notes.css';
import './quillOverwrites.css';

//components
import { List } from './list/List';

//modules
import { PrimeReactProvider } from 'primereact/api';
import { Editor } from 'primereact/editor';
// import 'primereact/resources/themes/lara-light-cyan/theme.css';

type Note = {
  id: number;
  title: string;
  content: string;
};

const SAVE_DELAY = 2000;
const STORAGE_KEY = 'notes-app-data';

export function Notes() {
  // const [editingStatus, setEditingStatus] = useState<boolean>(false);

  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 0, title: 'first note', content: '<p>first note content</p>' },
    ];
  });

  const [selectedId, setSelectedId] = useState<number | null>(
    notes[0]?.id ?? null
  );

  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextIdRef = useRef<number>(0);

  useEffect(() => {
    if (notes.length > 0) {
      nextIdRef.current = Math.max(...notes.map((n) => n.id)) + 1;
    }
  }, []);

  // save to local storage
  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, SAVE_DELAY);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [notes]);

  function addNote() {
    const id = nextIdRef.current++;
    const newNote: Note = { id, title: '', content: '' };
    setNotes((s) => [newNote, ...s]);
    setSelectedId(id);
  }

  function selectNote(id: number) {
    setSelectedId(id);
  }

  function updateTitle(title: string) {
    if (selectedId === null) return;
    setNotes((prev) =>
      prev.map((n) => (n.id === selectedId ? { ...n, title } : n))
    );
  }

  function updateContent(html: string) {
    if (selectedId === null) return;
    setNotes((prev) =>
      prev.map((n) => (n.id === selectedId ? { ...n, content: html } : n))
    );
  }

  const selected = notes.find((n) => n.id === selectedId) ?? null;

  // const toggleEditingStatus = () => {
  //   setEditingStatus(!editingStatus);
  // };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (selectedId === id) {
      setSelectedId(null);
    }
  };

  return (
    <>
      <div className="notes">
        <div className="notes-list">
          {/* <div onClick={toggleEditingStatus}> Edit </div> */}
          <ul>
            {notes.map((n) => (
              <List
                key={n.id}
                id={String(n.id)}
                title={n.title}
                active={n.id === selectedId}
                onSelect={(id) => selectNote(Number(id))}
                // editingStatus={editingStatus}
                onDelete={() => deleteNote(n.id)}
              />
            ))}
          </ul>
          <div className="add-section">
            <button className="add-notes" onClick={addNote}>
              Add Note
            </button>
          </div>
        </div>
        <PrimeReactProvider>
          <div className="notes-edit">
            <div className="title-section">
              <input
                type="text"
                className="note-editor-title focus-visible "
                placeholder="add a title for your note"
                value={selected?.title ?? ''}
                onChange={(e) => updateTitle(e.target.value)}
                disabled={!selected}
              />
            </div>
            <Editor
              value={selected?.content ?? ''}
              onTextChange={(e) => updateContent(e.htmlValue ?? '')}
            />
          </div>
        </PrimeReactProvider>
      </div>
    </>
  );
}
