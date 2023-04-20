import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { UserContextProvider } from "./contexts/UserContextProvider";
import "./scss/style.scss";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <UserContextProvider>
                <RouterProvider router={appRouter} />
            </UserContextProvider>
        </React.StrictMode>
    </Provider>
);
