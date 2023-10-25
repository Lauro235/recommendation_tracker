import './App.css'
import Navigation from './components/Navigation';

import { useContext } from 'react';
import { UserContext } from './main';

function App() {
  const users = useContext(UserContext)
  
  console.log(users);
  
  
  return (
    <>
      <div className='h-full border-solid border-2'>
        <Navigation />
      </div>
    </>
  )
}

export default App
