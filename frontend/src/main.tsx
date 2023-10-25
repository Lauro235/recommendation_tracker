import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import users, {TUsers} from './data/users.ts'

export const UserContext = createContext<null | TUsers>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext.Provider value={users}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>,
)
