import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton(props) {
    return (
        <div onClick={props.toggle} >
            <Fab className='fixed bottom-4 right-4 bg-[#171717]' color="warning" aria-label="add">
                <EditIcon position='absolute'/>
            </Fab>
        </div>
    );
}