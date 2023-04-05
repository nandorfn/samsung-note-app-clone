import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link';

export default function FloatingActionButtonSize() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab className='fixed bottom-4 right-4 bg-[#171717]' color="warning" aria-label="add">
                <EditIcon />
            </Fab>
        </Box>
    );
}

export function FloatingDoneButtonSize() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab className='fixed bottom-4 right-4 bg-[#171717]' color="warning" aria-label="add">
                <CheckIcon />
            </Fab>
        </Box>
    );
}