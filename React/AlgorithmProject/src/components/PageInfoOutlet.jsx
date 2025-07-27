import { Outlet } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
export default function PageInfoOutlet() {
  return (
    <>
      <main>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={300}>
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  )
}
