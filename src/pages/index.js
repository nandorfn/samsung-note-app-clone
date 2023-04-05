import { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Note from '../../components/Note'
import BarMenu from '../../components/BarMenu'
import InputForm from '../../components/input'
import EditButton from '../../components/EditButton'


export default function Home(props) {
  const [notes, setNotes] = useState([]);
  const notesLength = notes.length;

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  const [isClicked, setIsClicked] = useState(false);
  const [showInput, setShowInput] = useState(false);
  function toggleInput() {
    setShowInput(!showInput);
  }
  function handleClick() {
    setIsClicked(true);
  }



  return (
    <>
      <BarMenu />
      <Header length={notesLength} />
      <Navbar />
      <InputForm showInput={showInput} onClose={() => setShowInput(false)} onClick={handleClick} onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      
    <EditButton toggle={toggleInput}/>




    </>
  )
}
