import { Route, Routes, useNavigate } from 'react-router-dom'
import {
  HOME_PAGE,
} from '../constants/routers'

import LayoutIndex from '../layouts'
import HomePage from '../pages/home'
const Router = () => {

  const navigate = useNavigate()


  return (
    <Routes>
      <Route path={HOME_PAGE} element={<LayoutIndex />}>
        <Route
          index
          element={
              <HomePage  />
          }
        />
        

      </Route>
      {/* <Route path="*" element={<NotFoundPage />}
      />
      <Route path={LOGIN_PAGE} element={<LoginPage />}
      />
      <Route path={MAINTENANCE_PAGE} element={<MaintenancePage />} /> */}
    </Routes>)
}


export default Router
