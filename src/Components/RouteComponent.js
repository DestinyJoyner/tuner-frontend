import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import Show from "../Pages/Show";


function RouteComponent(props) {
    return (
        <Routes>
            <Route path ="/">
                <Route index element = {<Home />} />
                <Route path = "songs">
                    <Route index element = {<Index />} />
                    <Route path = ":id">
                        <Route index element = {<Show />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default RouteComponent;