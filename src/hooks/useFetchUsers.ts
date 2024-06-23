import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useUserTableStore } from "../store";

const useGetUsersData = () => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { usersData, setUsersData, debouncedSearch } = useUserTableStore()

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
    }, [data]);

    useEffect(() => {
        console.log({ debouncedSearch })
        if (debouncedSearch) {
            const searchedData = usersData.filter(user => user.name.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
                || user.email.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase())
                || user.role.toLocaleLowerCase().includes(debouncedSearch.toLocaleLowerCase()));
            setUsersData(searchedData);
            console.log({ debouncedSearch })

        } else {
            setUsersData(data);
        }
    }, [debouncedSearch])

    useEffect(() => {
        if (error) {
            setErrorMessage(error.message);
        }
    }, [error]);

    return { usersData, isLoading, error, errorMessage };
}

export { useGetUsersData }
