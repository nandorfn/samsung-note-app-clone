import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

export default function Navbar() {
    return (
        <>
            <ul className='grid grid-cols-2 place-content-around text-center mx-5'>
                <li className='flex justify-start items-center'>    
                    <MenuRoundedIcon />
                </li>
                <li className="flex justify-end items-center space-x-4">
                    <PictureAsPdfOutlinedIcon />
                    <SearchIcon />
                    <MoreVertSharpIcon />
                </li>
            </ul>
        </>
    );
}