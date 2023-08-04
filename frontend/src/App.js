import Router from './Router'
import Initialization from './components/Initialization'
import useAuthStore from './store/useAuthStore';

function App() {

  const isLoading = useAuthStore((state) => state.isLoading)

  return isLoading ? <Initialization/> : <Router /> <h1>oi</h1>

}

export default App;