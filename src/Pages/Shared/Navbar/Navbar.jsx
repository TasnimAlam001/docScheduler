
import { Link } from "react-router-dom";



const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);
    // const [cart]= useCart();
    // const total = cart.reduce((sum,item)=>item.price+sum, 0)

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .then(error => console.log(error))
    // }

    const user = true;

    const navOptions = <>
        <li><Link to="/"> Home</Link></li>
        <li> <Link to="/menu">Menu</Link> </li>

        <li><Link to="/order/salad">Order Food</Link></li>

    </>


    return (
        <div className="">
            <div className="navbar border-b">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Tasty Tidbits</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>

                            <div className="flex">
                                <div className="flex">
                                    <div className="form-control ">
                                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                                        
                                    </div>

                                    <button className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            <span className="badge badge-xs badge-primary indicator-item"></span>
                                        </div>
                                    </button>
                                </div>
                                <div className="dropdown dropdown-end ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={user.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                        <li>
                                            <a className="justify-between">
                                                <span className="font-bold"> {user?.displayName}</span>

                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><button >Logout</button></li>
                                    </ul>
                                </div>
                            </div>


                        </> : <>

                            <button> <Link to="/login">Login</Link> </button>
                        </>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;