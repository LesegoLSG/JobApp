import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/LandingPage/HomePage";
import PageNotFound from "./Components/Errors/PageNotFound";
import SingleJob from "./Pages/SingleJob/SingleJob";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>,
        errorElement:<PageNotFound/>,
    },
    {
        path:"/singlejob/:id",
        element:<SingleJob/>,
    },
])

export default router;