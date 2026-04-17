import './cstyles.css'

function LoginForm(){
    return(
        <div className=" flex justify-center">
            <div className="mt-10 h-80 w-80 shadow-2xl rounded-2xl p-10 border-l-15 border-b-15 border-2 border-purple-900">
                <h1 className='font-extrabold text-2xl mb-5'>User Login</h1>
                <form action="">
                    
                    <p>Username: <input id='username' type="text" className="rounded w-50 border-b-1" /></p>
                    <p>Password: <input id='password' type="text" className="rounded w-50 bg-white border-b-1" /></p>
                    

                    <div className="mt-5 w-full flex justify-center gap-5">
                        <button className='rounded-xl h-10 w-25 bg-purple-900 text-white shadow-2xl'>REGISTER</button>
                        <input type="submit" value="LOGIN" className='rounded-xl h-10 w-25 bg-yellow-900 text-white shadow-2xl' />
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default LoginForm;