import React, {FC} from "react";

import {UserPresentedData} from "../types";

export const UsersPresentation: FC<{ presentationData: UserPresentedData[] }> = ({presentationData}) => {
    return (
        <table className={'table-styles'}>
            {presentationData.map(({id, name, profitAndLoss, accountType}) => (
                <tr key={id}>
                    <td>
                        {name}
                    </td>
                    <td>
                        {profitAndLoss}
                    </td>
                    <td>
                        {accountType}
                    </td>
                </tr>
            ))}
        </table>
    )
}
