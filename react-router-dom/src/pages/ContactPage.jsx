import { Link, Outlet } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      <h2 className="title">Contactme</h2>
      <Link className="button" to={'/contact/form'}>Get form</Link>
      <Outlet />
    </div>
  )
}

export { ContactPage };
