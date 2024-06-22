
import styles from './App.module.scss'
import { SearchUserComp } from './components/SearchUserComp'
import { UserTable } from './components/UserTable';
import { useFetchUsers } from './hooks/useFetchUsers';

function App() {
  const { usersData, isLoading } = useFetchUsers();
  


  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <h1>Admin UI Geektrust Project</h1>
      </nav>
      <SearchUserComp />
      <UserTable usersData={usersData} isLoading={isLoading}/>
    </div>
  )
}

export default App
