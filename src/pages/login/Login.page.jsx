import LoginFormComponent from '../../components/login/Login.component';
import './Login.scss';
const LoginPage = () => {
  return (
    <form className='login'>
    {/* body de la pagina Login */}
      <LoginFormComponent></LoginFormComponent>
    </form>
  )
}

export default LoginPage
