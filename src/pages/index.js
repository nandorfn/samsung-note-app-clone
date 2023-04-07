import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Note from '../../components/Note'
import BarMenu from '../../components/BarMenu'
import InputForm from '../../components/input'
import EditButton from '../../components/EditButton'


export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const notesLength = notes.length;

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function toggleInput() {
    setShowInput(!showInput);
  }
  
  function handleClick() {
    setIsClicked(true);
  }
  
  useEffect(() => {
    const storedState = localStorage.getItem('notes');
      if (storedState) {
      setNotes(JSON.parse(storedState))
      } else {
        setNotes([])
        }
  }, []);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('notes', JSON.stringify(notes));
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notes]);
  



  return (
    <>
      <BarMenu />
      <Header length={notesLength} />
      <Navbar />
      <InputForm showInput={showInput} onClose={() => setShowInput(false)} onClick={handleClick} onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <EditButton toggle={toggleInput} />




    </>
  )
}
