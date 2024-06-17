import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user.api";

function App() {
    const navigate = useNavigate();
    const user = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false,
    });
    if (user.isLoading) {
        return <div>loading data...</div>;
    }

    if (user.isError)
        return (
            <div className="flex flex-col items-center">
                <p className=" text-slate-700 text-5xl font-black py-5">
                    <NavLink to={"/"}>Only Members App</NavLink>
                </p>
                <Outlet />
            </div>
        );

    if (user.data) navigate("/auth/status");
}

export default App;
