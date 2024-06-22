type Users = {
    id:string;
    name:string;
    email:string;
    role:string;
}


type UserTableProps = {
    usersData:Users[]
    isLoading:boolean;
}

interface SearchState {
    debouncedSearch: string|null;
    setDebouncedSearch: (value: string) => void;
    usersData:Users[];
    setUsersData: (value:Users[]) => void;
}

export type  {Users,UserTableProps, SearchState}