import { useContext, useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { DataContext } from './context/ApiContext';
import Button from './components/Homepage/Button';
import Spinner from "./components/Spinner/Spinner"

function App() {
  const { loading, bgColor, fetchData } = useContext(DataContext);
  const [background, setBackground] = useState('#332B05'); // Default background color

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (bgColor.length >= 3) {
      const gradient = `linear-gradient(155deg, ${bgColor[0]}, #FFA07A 100%, rgba(255, 0, 0, 0.7) 100%)`;

      setBackground(gradient);
    } else if (bgColor.length > 0) {
      setBackground(bgColor[0]);
    } else {
      setBackground('#000');
    }
  }, [bgColor]);


  return (
    <div className='relative overflow-hidden' style={{ background: background }}>
      {
        loading ? (
          <div className='flex flex-col gap-4 h-full w-full'>
            <div className='m-14'>
              <Spinner />
            </div>
            <Button />
          </div>
        ) : (<Layout />)
      }
    </div>
  );
}

export default App;
