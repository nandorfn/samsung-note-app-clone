import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton(props) {
    return (
        <div onClick={props.toggle} className='absolute'>
            <Fab className='fixed bottom-4 right-4 bg-[#171717]' color="warning" aria-label="add">
                <EditIcon />
            </Fab>
        </div>
    );
}