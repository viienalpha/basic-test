import { useTranslation } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

import './i18n'
import Router from './routers'



const App = () => {

  const { i18n } = useTranslation()




  return (
    <div className="App">

      
      {/* Main Router */}
      <BrowserRouter>
        <Router />
      </BrowserRouter> 
      
    </div>
  )
}

export default App
