import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

export default function EditButton(props) {
    const fabStyle = {
        position: 'fixed',
        bottom: '4px',
        right: '4px',
        backgroundColor: '#171717',
        color: 'white',
        zIndex: 999,
    };

    const editIconStyle = {
        position: 'absolute',
    };

    return (
        <div onClick={props.toggle} >
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab style={fabStyle} color="warning" aria-label="add">
                    <EditIcon style={editIconStyle} />
                </Fab>
            </Box>
        </div>
    );
}