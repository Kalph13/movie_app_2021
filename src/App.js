import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/movie/:id"><Detail /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </BrowserRouter>
    )
};

export default App;