
import { useState } from 'react';
import styles from './App.module.scss'
import { SearchUserComp } from './components/SearchUserComp'
import { UserTable } from './components/UserTable/UserTable';
import {  useGetUsersData } from './hooks/useGetUsersData';
import { Toaster } from 'react-hot-toast';

function App() {
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const { usersData, isLoading } = useGetUsersData(debouncedSearch);

  const hanldedebouncedSearch=(searchText: string) =>{
    setDebouncedSearch(searchText);
  }

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <h1>Admin UI Geektrust Project</h1>
      </nav>
      <SearchUserComp hanldedebouncedSearch={hanldedebouncedSearch}/>
      <Toaster/>
      <UserTable usersData={usersData} isLoading={isLoading}/>
    </div>
  )
}

export default App
