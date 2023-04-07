import DefaultLayout from './components/layout/DefaultLayout';
import Home from './components/pages/Home';
import { BankProvider } from './context/bankContext';

function App() {
  return (
    <BankProvider>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </BankProvider>
  );
}

export default App;
