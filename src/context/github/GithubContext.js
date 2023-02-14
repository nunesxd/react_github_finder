import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';


const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: true
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });

        const data = await response.json();

        dispatch({
            type: "GET_USERS",
            payload: data,
        });

        // Definição dos estados pelo hook 'useState', que foi substituido pelo 'useReducer':
        // setUsers(data);
        // setLoading(false);
    }

    return (
        <GithubContext.Provider
        value={{
            users: state.users,
            loading: state.loading,
            fetchUsers,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext