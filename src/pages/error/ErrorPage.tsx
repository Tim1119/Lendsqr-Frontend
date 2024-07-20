import {Link} from 'react-router-dom'
import '../../styles/pages/error-page.scss'

const ErrorPage = () => {
  return (
    <div className="error">
    <div className="error__content">
      <h1>Oops</h1>
      <h2>Sorry an error occured</h2>
      <p>An error has occured </p>
      <Link to="/dashboard/users/" className="home-link">Go to Home</Link>
    </div>
    </div>
  )
}

export default ErrorPage