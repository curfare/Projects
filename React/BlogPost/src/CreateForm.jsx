import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useStore } from './BlockPosts'
import Button from '@mui/material/Button'
import { nanoid } from 'nanoid'

export default function CreateForm() {
  const addItem = useStore((state) => state.setPosts)
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
  })

  async function onSubmit(data) {
    const file = data.image
    let base64Image = ''

    if (file) {
      base64Image = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    }

    addItem({
      image: base64Image,
      name: data.name,
      action: data.action,
      id: nanoid(),
    })
    reset()
  }
  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ position: 'relative' }}
      >
        <Link
          to="/"
          style={{ position: 'absolute', right: '10px', top: '10px' }}
        >
          <Button variant="outlined">Вернуться</Button>
        </Link>
        <label className="form-label">Загрузите картинку</label>

        <Button variant="contained" component="label" sx={{ mt: 1, mb: 1 }}>
          Загрузить картинку
          <input
            type="file"
            hidden
            onChange={(e) => {
              setValue('image', e.target.files[0], { shouldValidate: true })
              trigger('image')
            }}
          />
        </Button>

        <label className="form-label" htmlFor="name">
          Введите имя
        </label>
        <input
          className="form-input"
          {...register('name', { required: true })}
          id="name"
          type="text"
          placeholder="User"
        />
        <label className="form-label" htmlFor="text">
          Введите текст
        </label>
        <input
          className="form-input"
          {...register('action', { required: true })}
          id="text"
          type="text"
          placeholder="Сегодня был..."
          maxLength="125"
        />

        <input
          className="form-button"
          type="submit"
          value="Создать пост"
          disabled={!isValid}
        />
      </form>
    </>
  )
}
