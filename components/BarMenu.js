

import ListMenu from './ListMenu';
import { useState, useEffect } from 'react';

export default function BarMenu(props) {
    const [showPopup, setShowPopup] = useState(props.showPopup);

    useEffect(() => {
        setShowPopup(props.showPopup);
    }, [props.showPopup]);

    function closePopup() {
        setShowPopup(false);
        props.onClose();
    }

    return (
        <>
          {showPopup && (
            <div className='container m-0'>
              <div className="bg-[#171717] w-5/6 rounded-2xl h-full absolute -mt-44 z-10">
                <ListMenu />
              </div>
              <div onClick={closePopup} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-2"></div>
            </div>
          )}
        </>
      );
      
}
