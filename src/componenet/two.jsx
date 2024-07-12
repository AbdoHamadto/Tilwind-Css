const ProjectTwo = () => {
    return(
    <>
        <div className="px-10 py-20"> 
            <div className="flex flex-col items-center">
                <h1 className="mb-10 font-bold w-fit text-3xl max-sm:text-2xl">Simple no-tricks pricing</h1>
                <p className="w-3/5 text-center text-xl text-gray-400 max-sm:w-full max-sm:text-lg">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
            </div>
            <div className="flex border border-slate-400 mt-10 p-4 pl-8 rounded-lg max-sm:block max-sm:p-4">
                <div>
                    <h3 className="font-bold text-2xl my-4 max-sm:text-xl">Lifetime membership</h3>
                    <p className="w-4/5 text-gray-500 text-xl mb-8 max-sm:text-lg max-sm:w-full">Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.</p>
                    <p className="text-purple-950 mb-4">What's included</p>
                    <div className="flex justify-between w-4/5 max-sm:w-full max-sm:block">
                        <ul className="">
                            <li className="text-gray-500">→  Private forum access</li>
                            <li className="text-gray-500">→  Entry to annual conference</li>
                        </ul>
                        <ul className=" ">
                            <li className="text-gray-500">→  Member resources</li>
                            <li className="text-gray-500">→  Official member t-shirt</li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/2 p-8 bg-gray-100 flex items-center flex-col max-sm:w-full max-sm:mt-4">
                    <p className="font-semibold text-gray-600">Pay once, own it forever</p>
                    <p className="mt-4">
                        <span className="font-bold text-4xl">$349</span>
                        <span className="text-sm ml-2">USD</span>
                    </p>
                    <button className="mt-4 bg-indigo-600 py-1 w-full rounded-md text-white font-bold hover:bg-indigo-500">Get access</button>
                    <p className="mt-4 text-gray-600 text-sm text-center ">Invoices and receipts available for easy company reimbursement</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProjectTwo;