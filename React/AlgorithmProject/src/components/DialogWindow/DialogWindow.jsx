import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export default function DialogWindow({ open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>CodeAlgosphere - это про понимание</DialogTitle>
        <DialogContent>
          <DialogContentText>
            CodeAlgosphere помогает людям понять основы алгоритмов и структур
            данных. На данном сайте вы можете прочитать теорию и порешать задачи
            на закрепление материала.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
