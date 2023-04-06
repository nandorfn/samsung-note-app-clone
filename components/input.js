import { useEffect, useState } from 'react';
import Link from 'next/link';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import Fab from '@mui/material/Fab';
import { FloatingDoneButtonSize } from './FloatingButton';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';


export default function inputForm(props) {

    const [input, setInput] = useState({
    title:"",
    content: ""
    });
    
    const [showInput, setShowInput] = useState(props.showInput);

    useEffect(() => {
        setShowInput(props.showInput);
    }, [props.showInput]);

    function closeInput() {
        setShowInput(!true);
        props.onClose();
    }
    
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setInput(prevNote => {
            return {
            ...prevNote,
            [name]: value}
        });
    };
    
    const submitNote = (event) => {
        props.onAdd(input);
        setInput({
            title: "",
            content: ""
        });
        setShowInput(false);
        event.preventDefault();
        
    };

    return (
        <>
        {showInput && (
        <div className='bg-black w-full h-full absolute -mt-52 z-10'>
            <form className="grid">
                <div className='grid grid-flow-row-dense grid-cols-4 m-4'>
                    <div className='col-span-3 flex items-center'>
                            <ArrowBackIosSharpIcon onClick={closeInput}/>
                        <input name='title' onChange={handleChange} type="text" className='p-2 ml-2 w-full bg-[rgb(0,0,0)] ' placeholder='Judul' value={input.title}></input>
                    </div>
                    <div className='flex items-center justify-end gap-4'>
                        <AutoStoriesRoundedIcon />
                        <AttachFileRoundedIcon />
                        <MoreVertRoundedIcon />
                    </div>
                </div>
                
                <div class="border-b-2 border-[#171717] ..."></div>
                
                <div className='flex items-center'>
                    <textarea name='content' onChange={handleChange} rows={100} type="textarea" className='m-4 w-full pb-100 bg-black outline-none' value={input.content}></textarea>
                </div>
                <button onClick={submitNote} >
                    <FloatingDoneButtonSize />
                </button>
            </form>
        </div>
        )}
        </>
    );
}