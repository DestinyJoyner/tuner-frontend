import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";


function RouteComponent(props) {
    return (
        <Routes>
            <Route path ="/">
                <Route index element = {<Home />} />

            </Route>
        </Routes>
    );
}

export default RouteComponent;