

function Settings(){
    return(
        <div className="mt-30 w-screen flex justify-center max-w-screen ">
            <div className="rounded-2xl w-80 h-100 p-10 shadow-2xl">
                <h1 className='font-bold text-2xl'>Settings</h1>
                
                <div className="flex w-full">
                    <div className="mt-5 flex items-center">
                        <h2 className='font-semibold'>THEME </h2>
                        <div className="ml-2 h-8 w-14 border-2 rounded-full flex items-center">
                            <div className="h-6 w-6 rounded-full bg-purple-900"></div>
                        </div>
                    </div>
                </div>

                <script>{}</script>
                <div className="flex w-full">
                    <div className="mt-5 flex items-center">
                        <h2 className='font-semibold'>BGM </h2>
                        <div className="ml-2 h-8 w-14 border-2 rounded-full flex items-center">
                            <div className="h-6 w-6 rounded-full bg-purple-900"></div>
                        </div>
                    </div>
                </div>

                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>PRIVACY POLICY</button>
                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>DELETE ACCOUNT</button>
                <button className='mt-4 bg-red-900 text-white w-40 h-8 rounded-xl'>ABOUT</button>

            </div>
        </div>
    );
}

export default Settings;