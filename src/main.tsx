import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Composer } from '@/composer'
// import { JSONPlaceholderRepository } from '@/shared/infra/repository/adapters/jsonplaceholder'
import { MockRepository } from '@/shared/infra/repository/adapters/mock'
import { ApiRepository } from '@/shared/infra/repository/adapters/api'
import { ListUsersScreen } from '@/users/presentation/list-users-screen'
import { CreateUserScreen } from '@/users/presentation/create-user-screen'
import { mountRoutes } from '@/shared/infra/router/mount'
import { NotFoundScreen } from '@/shared/ui/404'
import { Redirect } from '@/shared/infra/router/redirect'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Composer
      repository={import.meta.env.PROD ? new ApiRepository() : new MockRepository()}
    >
      {mountRoutes([
        {
          path: '/',
          component: <Redirect to='/users' />
        },
        {
          path: '/users',
          component: <ListUsersScreen />
        },
        {
          path: '/users/create',
          component: <CreateUserScreen />
        },
        {
          path: '*',
          component: <NotFoundScreen />
        },
      ])}
    </Composer>
  </StrictMode>,
)
