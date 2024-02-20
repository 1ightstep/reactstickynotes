import './App.css';
import Home from './pages/Home/Home';
import Locker from './pages/locker/Locker';
import { useState } from 'react';
import extractNotesData from './utils/extractNotesData';
import vertifyLocker from  './utils/vertifyLocker';
import createLocker from './utils/createLocker';

function App() {
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState(null);
  const [errorDisplay, setErrorDisplay] = useState(null);
  const [currLocker, setCurrLocker] = useState(0);
  const handleCreate = (locker) => {
    vertifyLocker(locker)
      .then((response) => {
        if (!response.data) {
          createLocker(locker);
          extractNotesData(locker)
            .then((data) => {
              setData(data.data);
              setCurrLocker(locker);
              setConfirm(true);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setErrorDisplay("Locker exists.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleOpen = (locker) => {
    vertifyLocker(locker)
      .then((response) => {
        if (response.data) {
          extractNotesData(locker)
            .then((data) => {
              setData(data.data);
              setCurrLocker(locker);
              setConfirm(true);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setErrorDisplay("Locker doesn't exist.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    
  }
  return (
    <div className="App">
      {!confirm && <div className="error-display">{errorDisplay}</div>}
      {confirm ? <Home loadNotesData={data} locker={currLocker}/> : <Locker handleOpen={handleOpen} handleCreate={handleCreate}/>}
    </div>
  );
}

export default App;
