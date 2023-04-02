import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

export default function inputTitle() {
    return(
        <>
            <div className='grid grid-flow-row-dense grid-cols-4 m-4'>
                    <div className='col-span-3 flex items-center'>
                        <ArrowBackIosSharpIcon />
                        <input type="text" className='p-2 ml-2 w-full bg-[#171717]' placeholder='Judul'></input>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <AutoStoriesRoundedIcon />
                        <AttachFileRoundedIcon />
                        <MoreVertRoundedIcon />
                    </div>
                </div>
        </>
    );
}