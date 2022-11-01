import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return <nav className="navbar navbar-light bg-light justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mx-4">
            <CustomLink className="nav-link" to="/promocoes">Promoções</CustomLink>
          </li>
          <li className="nav-item mx-4">
            <CustomLink className="nav-link" to="/destinos">Destinos</CustomLink>
          </li>
          <li className="nav-item mx-4">
            <CustomLink className="nav-link" to="/contato">Contato</CustomLink>
          </li>
        </ul>
  </nav>

}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}