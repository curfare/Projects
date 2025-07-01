import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Cards from './Cards'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useAuth = create(
  persist(
    (set) => ({
      loggedIn: false,
      login: () => set({ loggedIn: true }),
      logout: () => set({ loggedIn: false }),
    }),
    {
      name: 'Auth',
      getStorage: () => localStorage,
    }
  )
)
export const useStore = create(
  persist(
    (set) => ({
      posts: [
        {
          image:
            'https://avatars.mds.yandex.net/i?id=df918c0fa25aa13bc38a1302b05a90b9a7ebb69a-12622473-images-thumbs&n=13',
          name: 'Андрей',
          action:
            'Вчера был с ребятами на отдыхе в Мухосранске. Это было незабываемо!',
          id: 1,
        },
        {
          image:
            'https://avatars.mds.yandex.net/i?id=19a4863e39a239c5a800193e791018dbe792fb15-12532262-images-thumbs&n=13',
          name: 'Егор',
          action:
            'Мой завтрак в 6:30 после продуктивной утренней рутины. #ЭСТЕТИКА',
          id: 2,
        },
        {
          image:
            'https://avatars.mds.yandex.net/i?id=3cde29abc9c228ccf9e59e32deb14799ea660772-5257239-images-thumbs&n=13',
          name: 'Влад',
          action:
            'Грагас является иконой эстетики в 2025 году и этот факт отрицать нельзя.',
          id: 3,
        },
      ],
      setPosts: (post) => set((state) => ({ posts: [...state.posts, post] })),
      removeId: (id) =>
        set((state) => ({ posts: state.posts.filter((el) => el.id !== id) })),
    }),
    { name: 'storage' }
  )
)

export default function BlockPosts() {
  const { posts, removeId } = useStore()

  return (
    <>
      <Box>
        <Typography variant="h3" component="h1" sx={{ p: 5 }}>
          Недавние публикации пользователей:
        </Typography>
        <Divider sx={{ mb: 5 }} />
        <Stack
          direction="row"
          spacing={0}
          sx={{ justifyContent: 'space-around', flexWrap: 'wrap' }}
        >
          {!posts.length ? (
            <Typography variant="h1" component="h2" sx={{ m: 10 }}>
              Ничего не найдено!
            </Typography>
          ) : (
            posts.map((el) => (
              <Cards
                key={el.id}
                image={el.image}
                name={el.name}
                action={el.action}
                onClick={() => removeId(el.id)}
              />
            ))
          )}
        </Stack>
      </Box>
    </>
  )
}
