import {FC} from "react";

import {useUsersAccounts} from "../hooks";

import {Spinner, UsersPresentation} from "../components";

export const UsersPresentationContainer: FC = () => {
    const {presentedUsersData, dataIsLoading} = useUsersAccounts();

    return (
        <div className={'container'}>
            {dataIsLoading ? <Spinner/> : <UsersPresentation presentationData={presentedUsersData}/>}
        </div>
    )
}
