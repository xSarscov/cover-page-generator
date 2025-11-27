import {AppProvider} from '@/app/provider.jsx';
import {AppRouter} from '@/app/router.jsx';

function App() {

  return (
      <AppProvider>
          <AppRouter />
      </AppProvider>
  )
}

export default App
