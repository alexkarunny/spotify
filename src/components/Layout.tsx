import {Link, NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <header>
                <NavLink to='/' >Playlists</NavLink>
                <NavLink to='artists'>Artists</NavLink>
                <NavLink to='tracks'>Tracks</NavLink>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>2012</footer>
        </div>
    )
}