import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function Dialog({ open, onClick, onClose }) {
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClose={onClose}
        onClick={open}
      >
        Создать пост
      </Button>
      <Dialog open={open}>
        <DialogTitle>Заполнение поста</DialogTitle>
        <DialogContent>
          <DialogContentText>Выберите фотографию</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClick} variant="outlined">
            Отменить создание
          </Button>
          <Button onClick={onClick} variant="outlined">
            Создать пост
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
