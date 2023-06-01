import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 nav z-40 shadow-sm shadow-red-500 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl">
                            <li><a href='#about'>About </a></li>

                            <li><a href='#service'>Service </a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">Ilhan Khondaker </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <li><a href='#about'>About </a></li>

                        <li><a href='#service'>Service </a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="grid-flow-col gap-4 flex md:place-self-center md:justify-self-end pr-10">

                        <a href='https://www.facebook.com/ilhan.khondaker' target='blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;