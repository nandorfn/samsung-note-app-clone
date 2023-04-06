import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

export default function EditButton(props) {
    return (
        <div onClick={props.toggle} >
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab className='fixed bottom-4 right-4 bg-[#171717] !important' color="warning" aria-label="add">
                    <EditIcon className='absolute'/>
                </Fab>
            </Box>
        </div>
    );
}