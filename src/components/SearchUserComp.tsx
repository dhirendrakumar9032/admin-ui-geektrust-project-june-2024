import  { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useUserTableStore } from '../store';

const SearchUserComp:FC = () => {

    const [searchInp, setSearchInp]=useState<string>('');
    const {  setDebouncedSearch } = useUserTableStore();

    useEffect(()=>{
        const timer= setTimeout(()=>{
          setDebouncedSearch(searchInp)
        },300);

       return ()=> clearTimeout(timer);
    },[searchInp])

    const handleChange = (e:any) => {
        setSearchInp(e.target.value);
    }
  return (
    <div className={styles.searchField}>
        <input value={searchInp} type="text" placeholder="Search User" onChange={handleChange}/>
    </div>
  )
}

export  {SearchUserComp}
