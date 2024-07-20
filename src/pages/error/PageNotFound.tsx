import {Link} from 'react-router-dom'
import '../../styles/pages/page-not-found.scss'


const PageNotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1>404</h1>
        <h2>Page does not exist</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/dashboard/users/" className="home-link">Go to Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound