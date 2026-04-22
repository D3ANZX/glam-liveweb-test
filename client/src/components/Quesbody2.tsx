function Quesbody2({question, correct_answer, incorrect_answers}) {
    return(
        <div className="mt-20 h-100 w-screen flex justify-center ">
            <div id='card' className="absolute h-max w-80 bg-purple-800 rounded-2xl p-7">
                <div className="bg-white rounded-2xl p-5">
                    <h1 className=" ">{question}</h1>
                </div>
                    <button className='bg-red-800 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>A. {correct_answer}</button>
                    <button className='bg-green-800 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>B. {incorrect_answers[0]}</button>
                    <button className='bg-blue-900 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>C. {incorrect_answers[1]}</button>
                    <button className='bg-yellow-900 mt-5 flex items-center justify-center gap-20 h-10 w-66 text-white font-semibold'>D. {incorrect_answers[2]}</button>
            </div>
        </div>
    );
}
export default Quesbody2;