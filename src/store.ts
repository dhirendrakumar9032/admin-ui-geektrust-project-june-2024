import { create } from 'zustand';
import { UserTableState } from './types';


const useUserTableStore = create<UserTableState>((set) => ({
    debouncedSearch: null,
    setDebouncedSearch: (value) => set({ debouncedSearch: value }),
    usersData: [],
    setUsersData: (value) => set({ usersData: value }),
    currentPage: 1,
    setCurrentPage: (value) => set({ currentPage: value }),
    
    
}));

export { useUserTableStore }