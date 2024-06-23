import { create } from 'zustand';
import { SearchState, } from './types';


const useUserTableStore = create<SearchState>((set) => ({
    debouncedSearch: null,
    setDebouncedSearch: (value) => set({ debouncedSearch: value }),
    usersData: [],
    setUsersData: (value) => set({ usersData: value }),
}));

export { useUserTableStore }