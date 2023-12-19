import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'

interface DialogProps {
    open: boolean
    setOpen: (open: boolean) => void
    title?: string
    content?: any
    fullscreen?: boolean
}

export function MuiDialog({open, setOpen, title, content, fullscreen}: DialogProps) {


    return (
        <Dialog sx={{
            width: '75%',
            height: '75%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }}
                fullScreen open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title'
                aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant={'outlined'} onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
