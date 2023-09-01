import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Doctors from "../Pages/Home/Doctors/Doctors";
import SideBar from "../Pages/Home/SideBar/SideBar";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <SideBar></SideBar>,
                children: [
                    {
                        path: "hospital/:id",
                        element: <Doctors></Doctors>,
                        loader: ({ params }) => fetch(`http://localhost:5000/hospital/${params.id}`)

                    }
                ]
            }
        ]
    },
]);