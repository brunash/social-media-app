import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Necessitatibus, maxime. Totam ipsum dignissimos consequatur ex.
                        Rerum consequatur veritatis praesentium, deserunt, voluptates enim 
                        quidem quisquam placeat expedita iure necessitatibus eius perspiciatis?
                    </p>
                    <span>Don't you have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form action="">
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;