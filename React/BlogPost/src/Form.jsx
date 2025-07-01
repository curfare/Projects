import Button from '@mui/material/Button'
import { useForm } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from './BlockPosts'
export default function Form() {
  const [formSubmit, setFormSubmit] = useState(false)
  const navigate = useNavigate()
  const login = useAuth((state) => state.login)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = () => {
    setFormSubmit(true)
    navigate('/', { state: { formSubmit: true } })
    login()
    reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Введите Имя</label>
      <input
        className="form-input"
        placeholder="Ivan"
        maxLength="15"
        {...register('name', {
          required: 'Заполните имя!',
        })}
      />

      {errors.name && (
        <Alert severity="error">
          {errors?.name?.message || 'Минимум 6 символов!'}
        </Alert>
      )}
      <label className="form-label">Введите почту</label>
      <input
        className="form-input"
        placeholder="example1@gmail.com"
        {...register('email', {
          required: 'Заполните почту!',
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,

          minLength: 10,
        })}
      />

      {errors.email && (
        <Alert severity="error">
          {errors?.email?.message || 'Неправильный формат почты'}
        </Alert>
      )}
      <label className="form-label">Введите пароль</label>
      <input
        className="form-input"
        placeholder="P@ssw0rd"
        type="password"
        {...register('password', {
          required: 'Заполните пароль!',
          minLength: 8,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        })}
      />

      {errors.password && (
        <Alert severity="error">
          {errors?.password?.message ||
            'Минимум 8 символов, одна заглавная буква и одна цифра!'}
        </Alert>
      )}
      <input
        className="form-button"
        type="submit"
        value="Зарегистрироваться"
        disabled={!isValid}
      />
    </form>
  )
}
