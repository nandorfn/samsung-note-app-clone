import { useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Note from '../../components/Note'
import BarMenu from '../../components/BarMenu'
import styles from '@/styles/Home.module.css'
import FloatingActionButtonSize from '../../components/FloatingButton'
import InputForm from './posts/input'


export default function Home() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }


  <InputForm onAdd={addNote} className="styles.hidden" />

  return (
    <>
      <BarMenu />
      <Header />
      <Navbar />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}

      <FloatingActionButtonSize />

    </>
  )
}
