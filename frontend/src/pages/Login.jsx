import { Link } from 'react-router-dom'
// import Logo from '../assets/Logos/logo_light.png'
// import IconOne from '../assets/Logos/Icon_one.png'

const Login = () => {
  return (
    <div className='row LoginWrapper'>
        <div className='col d-flex flex-column justify-content-between align-items-center LeftDivWrapper'>
            <div>
                {/* <img src={Logo} alt="Website Logo" /> */}
            </div>
            <div className='mt-auto'>
                {/* <img src={IconOne} alt="Icon for web" /> */}
            </div>
        </div>
        <div className='col align-content-center RightDivWrapper'>
            <form className='LoginForm'>
                <h1> Welcome Back to Pic2Pick </h1>
                <p> Don’t have an account? <Link> Create free account</Link> </p>
                <hr />

                <div className="form-group mt-2 mb-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mt-2 mb-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
               
                <button type="submit" className="btn-block mt-4 mb-2 pt-1 pb-1 SubmitBtn">Login</button>

                <Link>Forgot password ?</Link>

                <hr />

                <p>Or login with your social account</p>

                <div className='GoogleSocial'>
                    Google
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login