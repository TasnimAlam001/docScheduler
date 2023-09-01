import { NavLink, Outlet } from "react-router-dom";
import Medical from "../../../Components/Medical/Medical";
import useHospitals from "../../../Hooks/useHospitals";
import { FaAngleDoubleDown } from "react-icons/fa";




const SideBar = () => {

    // const [selectedHospital, setSelectedHospital] = useState("");
    const [hospitals] = useHospitals();
    // console.log(hospitals);


    // const handleDoctors = (hospital) =>{
    //     setSelectedHospital(hospital)
    // }



    return (
        <div className=" ml-8">

            <div className="drawer lg:drawer-open ">
            
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                
                <div id="sidebar" className="drawer-side hidden lg:block z-20 ">
                
                    <div className="text-center py-5 z-10 bg-transparent flex flex-col justify-center items-center">
                        <h1 className="uppercase text-2xl font-bold text-center p-4">Available  Hospitals...</h1><span className="text-red-400"><FaAngleDoubleDown></FaAngleDoubleDown></span>
                    </div>
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul id="sidebar" className="menu p-4  w-fit min-h-full border-r ">
                        {
                            hospitals?.map((hospital) => (
                                <li key={hospital._id}>
                                    <NavLink to={`hospital/${hospital._id}`}>
                                        <Medical hospital={hospital} />
                                    </NavLink>
                                </li>
                            ))
                        }


                    </ul>
                </div>
                <div className="drawer-content flex flex-col ">
                        
                    
                        <Outlet></Outlet>
                    
                   
                        
                </div>

            </div>
        </div>
    );
};

export default SideBar;