import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import NoteRoundedIcon from '@mui/icons-material/NoteRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DriveFileMoveRoundedIcon from '@mui/icons-material/DriveFileMoveRounded';
import { useState } from 'react';

export default function BarMenu() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className='container bg-[#000] w-full h-full'>
                <div className='bg-[#171717] w-5/6 rounded-2xl h-full absolute mt-6'>
                    <div>
                        <SettingsRoundedIcon className='absolute right-4 top-4' />
                    </div>
                    <ul className='mt-24 ml-10 text-xl'>
                        <li className='mb-4'><DescriptionRoundedIcon className='mr-4' />Semua Catatan</li>
                        <li className='mb-4'><NoteRoundedIcon className='mr-4'/>Catatan format lama</li>
                        <li className='mb-4'><LockRoundedIcon className='mr-4'/>Catatan terkunci</li>
                        <li className='mb-4'><GroupRoundedIcon className='mr-4'/>Catatan bersama</li>
                        <li className='mb-4'><DeleteRoundedIcon className='mr-4'/>Sampah</li>
                        <li className='mb-4'><DriveFileMoveRoundedIcon className='mr-4'/>Folder</li>
                    </ul>
                </div>
            </div>
        </>
    );
}