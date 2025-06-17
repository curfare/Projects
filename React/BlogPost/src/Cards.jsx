import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import DialogLike from './DialogLike'
import { useState } from 'react'
export default function Cards({ image, name, action, onClick }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          border: '2px solid black',
          borderRadius: 2.5,
          m: 2,
          position: 'relative',
        }}
      >
        <CardMedia
          sx={{ height: 200, backgroundSize: 'cover' }}
          image={image}
        />
        <CardContent>
          <Avatar>{name[0]}</Avatar>
          <Typography variant="h5" component="h6">
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              p: 1,
              fontSize: 18,
              lineHeight: 1.5,
              height: 100,
              maxHeight: 100,
              overflow: 'hidden',
            }}
          >
            {action}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Оценить пост
          </Button>
          {open && <DialogLike open={open} onClick={() => setOpen(false)} />}

          <Button onClick={onClick} variant="contained" color="error">
            Скрыть из ленты
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
