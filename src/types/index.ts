type Users = {
    id: string;
    name: string;
    email: string;
    role: string;
}


type UserTableProps = {
    usersData: Users[]
    isLoading: boolean;
}

interface UserTableState {
    debouncedSearch: string | null;
    setDebouncedSearch: (value: string) => void;
    usersData: Users[];
    setUsersData: (value: Users[]) => void;
    currentPage: number;
    setCurrentPage: (value: number) => void;
    
}

interface UserTableFooterProps {
    onDeleteSelected: () => void;
    usersData: Users[];
    currentPage: number;
    totalPages: number;
    onChangePage: (page: number) => void;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

export type { Users, UserTableProps, UserTableState , UserTableFooterProps }