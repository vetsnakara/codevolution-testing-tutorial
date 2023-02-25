import './App.css'
import { MuiMode } from './components/Mui/MuiMode'
import { AppProviders } from './providers/AppProviders'

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
