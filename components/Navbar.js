import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useState } from 'react';
import BarMenu from './BarMenu';

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(true);
  }

  return (
    <>
      <ul className='grid grid-cols-2 place-content-around text-center mx-5'>
        <li className='flex justify-start items-center'>
          <button onClick={togglePopup}>
            <MenuRoundedIcon />
          </button>
        </li>
        <li className="flex justify-end items-center space-x-4">
          <PictureAsPdfOutlinedIcon />
          <SearchIcon />
          <MoreVertSharpIcon />
        </li>
      </ul>
      <BarMenu showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
