import axios from "axios";

const accountTypes = axios.get('/rest/accounttypes')
const usersRequests = axios.get('/rest/accounts')

export const getAccountsTypesAndUsers = () => {
    return axios
        .all([accountTypes, usersRequests])
        .then(axios.spread((...responses) => {
            return {
                accountTypes: responses[0].data,
                users: responses[1].data
            }
        }))
}
