import { Link } from 'react-router-dom'

const Signup = () => {
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
                    <h1> Welcome to Pic2Pick </h1>
                    <p> Already have an account? <Link> Login </Link> </p>
                    <hr />

                    <div className="form-group mt-2 mb-4">
                        <label for="exampleInputEmail1">User name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter user name" />
                    </div>
    
                    <div className="form-group mt-2 mb-4">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-2 mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group mt-2 mb-2">
                        <label for="exampleInputPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>
                   
                    <button type="submit" className="btn-block mt-4 mb-4 pt-2 pb-2 SubmitBtn">Create Account</button>
                </form>
            </div>
    
        </div>
    )
}

export default Signup