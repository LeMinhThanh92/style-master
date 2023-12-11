import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'

interface DialogProps {
    open: boolean
    setOpen: (open: boolean) => void
    title?: string
    actionname: string
    content?: any
}

export function MuiDialog({open, setOpen, title, actionname, content}: DialogProps) {


    return (
        <Dialog fullScreen open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title'
                aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>{actionname}</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}
