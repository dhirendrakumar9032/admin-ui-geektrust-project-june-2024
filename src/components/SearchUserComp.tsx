import  { FC, useEffect, useState } from 'react'
import styles from './index.module.scss'

type SearchUserCompProps = {
  hanldedebouncedSearch: (searchText: string) => void;
}

const SearchUserComp:FC<SearchUserCompProps> = ({hanldedebouncedSearch}) => {

    const [searchInp, setSearchInp]=useState<string>('');
    

    useEffect(()=>{
        const timer= setTimeout(()=>{
          hanldedebouncedSearch(searchInp)
        },300);

       return ()=> clearTimeout(timer);
    },[searchInp])

    const handleChange = (e:any) => {
        setSearchInp(e.target.value);
    }
  return (
    <div className={styles.searchField}>
        <input value={searchInp} type="text" placeholder="Search User's name, email, or role" onChange={handleChange}/>
    </div>
  )
}

export  {SearchUserComp}
