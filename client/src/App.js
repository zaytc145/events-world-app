import './App.css';

import MainRoutes from "./routes/MainRoutes";

import AuthProvider from "./providers/AuthProvider";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <MainRoutes/>
            </AuthProvider>
        </Provider>
    );
}

export default App;
