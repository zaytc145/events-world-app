import {useCallback, useContext} from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const addUser = useCallback((user) => {
        setUser(user);
    },[setUser])

    const removeUser = useCallback(() => {
        setUser(null);
    },[setUser])

    return {user, addUser, removeUser}
}

export default useAuth