import {AccountType, User} from "../types";

export const createPresentedUsersData = (users : User[], accountTypes: AccountType[]) => {
    return users.map(user => {
        const usersAccountType = accountTypes.find(accountType => accountType.id === user.accountType)
        return {
            id: user.id,
            name: `${user.name}`,
            profitAndLoss: `${user.currency} ${user.profitLoss}`,
            accountType: usersAccountType?.title
        };
    })
}
