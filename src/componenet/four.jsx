const ProjectFour = () => {
  return (
    <div className='h-dvh flex bg-[#333] items-center'>
        <div className='w-24 h-24 border-x-4 border-purple-800 border-y-transparent border-y-4 mx-auto animate-spin-fast rounded-full'></div>
        <div>
          <div className="leo-border-1 absolute w-52 h-52 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 opacity-[0.8] animate-spin3D-fast"></div>
          <div className="leo-border-2 w-52 h-52 rounded-full bg-gradient-to-tl from-fuchsia-500 to-violet-500 opacity-[0.8] animate-spin3D-slow hover:animate-spin-fast"></div>
        </div>
        <div className='w-24 h-24 border-x-4 border-y-transparent border-y-4 border-purple-800 mx-auto animate-spin-slow rounded-full'></div>
    </div>
  )
}

export  default ProjectFour;