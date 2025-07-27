import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@mui/material'

export default function PracticeSolution({ open, onClose, number, children }) {
  function handleClose() {
    onClose()
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Задача {number}</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              width: 'auto',
              bgcolor: '#242424',
              color: 'green',
              p: 2,
              overflow: 'scroll',
            }}
          >
            <pre>{children}</pre>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
