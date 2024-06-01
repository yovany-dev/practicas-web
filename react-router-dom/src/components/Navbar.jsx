import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = ['Home', 'About', 'Contact'];
  const routesRender = routes.map((route, index) => {
    if (route == 'Home') {
      route = '/';
    }

    return (
      <li key={index}>
        <NavLink to={route.toLocaleLowerCase()}>{route.replace('/', 'Home')}</NavLink>
      </li>
    )
  });
  return (
    <nav>
      <ul>
        {routesRender}
      </ul>
    </nav>
  )
}

export { Navbar };
