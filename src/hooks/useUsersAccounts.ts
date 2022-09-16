import {useEffect, useState} from "react";
import {getAccountsTypesAndUsers} from "../services";
import {createPresentedUsersData} from "../utils/createPresentedUsersData";
import {UserPresentedData} from "../types";

export const useUsersAccounts = () => {
    const [presentedUsersData, setPresentedUsersData] = useState<UserPresentedData[]>([]);
    const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAccountsTypesAndUsers()
            .then(data => {
                setPresentedUsersData(createPresentedUsersData(data.users, data.accountTypes))
                setDataIsLoading(false)
            })
    }, [])

    return {presentedUsersData, dataIsLoading}
}
