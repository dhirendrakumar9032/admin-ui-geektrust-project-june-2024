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


interface UserTableFooterProps {
    onDeleteSelected: () => void;
    usersData: Users[];
    currentPage: number;
    totalPages: number;
    onChangePage: (page: number) => void;
    onNextPage: () => void;
    onPreviousPage: () => void;
}

export type { Users, UserTableProps , UserTableFooterProps }