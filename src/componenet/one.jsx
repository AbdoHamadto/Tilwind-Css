import profile from '../image/profile.jpg'

const ProjectOne = () => {
    return(
        <div className="flex items-center max-w-sm w-4/5 my-12 mx-auto p-6 rounded-lg bg-gray-100 shadow-lg relative">
            <div className='w-4 h-4 bg-red-500 rounded-full absolute -top-1 -right-1 animate-ping'></div>
            <div className='w-4 h-4 bg-red-600 rounded-full absolute -top-1 -right-1'></div>
            <div>
                <img className="rounded-full w-20 h-20" src={profile} />
            </div>
            <div className="ml-6 text-center">
                <h4 className="text-black text-xl">ChitChat</h4>
                <p className="text-slate-500">You have a new message!</p>
                <button className='p-1 w-full rounded-full mt-2 font-semibold text-purple-900 border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent'>Message</button>
            </div>
        </div>
    )
}

export default ProjectOne;