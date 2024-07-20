import '../styles/pages/login.scss'
import lendsqrLogo from '../assets/images/logo.svg'
import lendsqrLoginIllustration from '../assets/images/login-illustration.svg'
import LoginForm from '../components/forms/LoginForm'

const LoginPage = () => {
  return (
    <div className='login' >
      <div className="login__container">
        <section className='login__left-container' >
          
            <img src={lendsqrLogo} className='login__logo' alt="lendsqr-logo" />
         
          <div className='login__illustration-container'>
            <img src={lendsqrLoginIllustration} className='login__illustration' alt="lendsqr-login-illustration" />
          </div>
        </section>
        <section className='login__right-container' >

          <img src={lendsqrLogo} alt="logo for small screens" />

          <div className='login__form-container' >
           <h3 >Welcome!</h3>
            <p >Enter details to login.</p>
            <LoginForm />
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default LoginPage