import create from 'zustand';
import { SearchState, Users } from './types';


export const useSearchStore = create<SearchState>((set) => ({
    debouncedSearch: null,
    setDebouncedSearch: (value) => set({ debouncedSearch: value }),
    usersData:[],
    setUsersData: (value) => set({ usersData: value }),
}));