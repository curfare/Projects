import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

export default function DialogWindow2({ open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Что делать если сделал все задания?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Мы рекомендуем вам пойти решать задачи на специальные сайты, такие
            как: Leetcode, CodeWars, NeetCode.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
