import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Note from '../../components/Note'
import styles from '@/styles/Home.module.css'
import FloatingActionButtonSize from '../../components/FloatingButton'


export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Note />
      
      <FloatingActionButtonSize />
    </>
  )
}
