import { Route, Routes } from "react-router-dom";
import AlbumsIndex from "../Pages/AlbumsIndex";
import AlbumsShow from "../Pages/AlbumsShow"
import Edit from "../Pages/Edit";
import Home from "../Pages/Home";
import Index from "../Pages/Index";
import New from "../Pages/New";
import Show from "../Pages/Show";
import Error from "../Pages/Error";

function RouteComponent() {
    return (
        <Routes>
            <Route path ="/">
                <Route index element = {<Home />} />
                <Route path = "songs">
                    <Route index element = {<Index />} />
                    <Route path = "new" element = {<New />} />
                    <Route path = ":id">
                        <Route index element = {<Show />} />
                        <Route path = "edit" element = {<Edit />} />
                    </Route>
                </Route>
                <Route path = "albums">
                    <Route index element = {<AlbumsIndex />} />
                    <Route path = ":id">
                        <Route index element = {<AlbumsShow />} />
                    </Route>
                </Route>
            </Route>
            <Route path ="*" element ={<Error />} />
        </Routes>
    );
}

export default RouteComponent;