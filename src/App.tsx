
import styles from './App.module.scss'
import { SearchUserComp } from './components/SearchUserComp'
import { UserTable } from './components/UserTable/UserTable';
import {  useGetUsersData } from './hooks/useFetchUsers';
import { Toaster } from 'react-hot-toast';

function App() {
  const { usersData, isLoading } = useGetUsersData();

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <h1>Admin UI Geektrust Project</h1>
      </nav>
      <SearchUserComp />
      <Toaster/>
      <UserTable usersData={usersData} isLoading={isLoading}/>
    </div>
  )
}

export default App
