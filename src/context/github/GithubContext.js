import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';


const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Obtem usuários do Github, para testes apenas:
    const fetchUsers = async () => {
        setLoading();

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

    // Função que configura o 'loading' como 'true', signifca que iremos realizar algum procedimento:
    const setLoading = () => dispatch({ type: "SET_LOADING" });

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