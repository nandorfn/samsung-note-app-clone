import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';


export function FloatingDoneButtonSize() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab sx={{position: 'fixed', bottom: '4rem', right: '4rem', bgcolor: '#171717 !important'}} color="warning" aria-label="add">
                <CheckIcon />
            </Fab>
        </Box>
    );
}
