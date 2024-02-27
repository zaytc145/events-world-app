import AuthContext from "../context/AuthContext/AuthContext";
import {useState} from "react";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider
