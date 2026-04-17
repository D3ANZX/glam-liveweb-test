import './cstyles.css'

function TfItem(){
    return(
        <div className="mt-10 flex justify-center">
            <div className="p-10 rounded-2xl h-100 w-80 bg-purple-900">
                <h1 className='text-white font-extrabold'>QUESTION#</h1>
                <p className='mt-5 text-white'>LOREM IPSUM DOLOR LOREM IPSUM DOLORLOREM IPSUM DOLORLOREM IPSUM DOLOR</p>
                 <p className='mt-5 border-2 flex items-center gap-10 h-10 w-60 text-white'><input type="radio" name="q1" id="" className='ml-5'/>TRUE</p>
                 <p className='mt-5 border-2 flex items-center gap-10 h-10 w-60 text-white'><input type="radio" name="q1" id="" className='ml-5'/>FALSE</p>
            </div>
        </div>
    );
}

export default TfItem;