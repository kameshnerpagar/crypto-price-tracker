import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoData } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoData());
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Real-Time Crypto Price Tracker 
      </h1>
      <div className="w-full ">
        <CryptoTable />
      </div>
    </div>
  );
}

export default App;
