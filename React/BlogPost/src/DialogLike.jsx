import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

export default function DialogLike({ open, onClick }) {
  const [click, setClick] = useState(false)
  const [like, setLike] = useState(false)

  function likeFunc() {
    if (!like) {
      setLike(true)
    }
  }
  return (
    <Dialog open={open}>
      <DialogTitle>Оценить пост</DialogTitle>
      <DialogContent>
        <Rating
          onClick={() => setClick(true)}
          onChange={likeFunc}
          readOnly={like}
        />

        {click && (
          <Typography
            sx={{
              position: 'absolute',
              left: '25px',
              right: '0',
              top: '55%',
              fontSize: '16px',
            }}
            component="span"
            variant="span"
          >
            Спасибо за отзыв!
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClick} sx={{ mr: 1 }}>
          Закрыть окно
        </Button>
      </DialogActions>
    </Dialog>
  )
}
