//import { useState } from 'react'
import OratorianoForm from './Components/oratoriano/oratorianoForm';
import Oratorianos from './Components/oratoriano/oratorianos';
import {OratorianosProvider} from './Components/oratoriano/Context/oratorianosProvider';
import { ViewProvider } from './Components/oratoriano/Context/viewProvider';
import { OrdemProvider } from './Components/oratoriano/Context/ordemProvider';
import './App.css'

function App() {
  

  return (
    <>
      <OratorianosProvider>
        <ViewProvider>
          <OrdemProvider>
            
            <OratorianoForm/>

            <Oratorianos/>

          </OrdemProvider>
        </ViewProvider>
      </OratorianosProvider>

    </>
  )
}

export default App
