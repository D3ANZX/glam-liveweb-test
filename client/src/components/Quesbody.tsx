function Quesbody({question}) {
    return(
        <div className="h-100 w-screen flex justify-center ">
            <div id='card' className="absolute h-max w-80 bg-purple-800 rounded-2xl p-7">
                <div className="bg-white rounded-2xl p-5">
                    <h1 className=" ">{question}</h1>
                </div>
                    <button className='bg-green-900 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>TRUE</button>
                    <button className='bg-red-800 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>FALSE</button>
            </div>
        </div>
    );
}
export default Quesbody;