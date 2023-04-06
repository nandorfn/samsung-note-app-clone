import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';


export function FloatingDoneButtonSize() {
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
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab style={fabStyle} color="warning" aria-label="add">
                <CheckIcon style={editIconStyle}/>
            </Fab>
        </Box>
    );
}
