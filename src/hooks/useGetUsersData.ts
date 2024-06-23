import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useUserTableStore } from "../store";

const useGetUsersData = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { usersData, setUsersData, debouncedSearch, setDebouncedSearch } = useUserTableStore();

    const fetchUsers = async () => {
        const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        return data;
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });

    useEffect(() => {
        if (data) {
            setUsersData(data);
            setErrorMessage(null);
        }
    }, [data, setUsersData]);

    useEffect(() => {
        const handleSearch = () => {
            if (debouncedSearch) {
                const searchedData = usersData.filter(user => 
                    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    user.email.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                    user.role.toLowerCase().includes(debouncedSearch.toLowerCase())
                );
                setUsersData(searchedData);
            } else {
                setUsersData(data);
            }
        };

        const debounceTimeout = setTimeout(handleSearch, 300);

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [debouncedSearch, usersData, data, setUsersData]);

    useEffect(() => {
        if (error) {
            setErrorMessage(error.message);
        }
    }, [error]);

    return { usersData, isLoading, error, errorMessage, setDebouncedSearch };
}

export { useGetUsersData }
