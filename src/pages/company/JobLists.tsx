import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '../../images/Logo.svg'

const createJob = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center space-y-6 container-md mx-24 pb-24 " >
                <div className='flex justify-between items-center w-full'>
                    <Image src={Logo} alt={"logo"} width={100} height={100} />
                    <div>
                        <button className='btn bg-white shadow-sm border-none rounded-none shadow-primaryC text-black mr-10  hover:bg-SecondaryC '>
                            <Link href={"/company/"}>
                                Applications
                            </Link>
                        </button>
                        <button className='btn bg-primaryC hover:bg-SecondaryC hover:text-black rounded-none'>
                            Create Job
                        </button>
                    </div>
                </div>
                <div className=' w-full '>
                    <div className='flex justify-start mb-10'>
                        <ul className='flex'>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/"}>Applications</Link>
                            </li>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/pinned"}>pinned</Link>
                            </li>
                            <li className='border-b-4 border-primaryC px-4 text-primaryC pb-2 w-40 flex justify-center'>
                                <Link href={"/company/JobLists"}>JobLists</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className='btn bg-primaryC hover:bg-SecondaryC hover:text-black rounded-none'>
                            Create Job
                        </button>

                        <h1 className='text-4xl mt-20 mb-5'>My jobs Offerce</h1>
                        <div className='flex flex-col'>
                            <div className='flex p-8 border mb-10 flex-col'>
                                <div className='mr-10 flex mb-10'>
                                    <div className='w-20 h-20 bg-gray-200 mr-5'></div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mt-3'>what is the job that the company provide </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '> Job Description </p>
                                    <p className='font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, harum hic dolor magni consequuntur nulla recusandae quisquam magnam iste velit nisi beatae repellendus numquam ea debitis rem quos similique molestiae deserunt nam odio architecto? Quisquam, inventore? Facilis error rerum minima, delectus illum architecto fugiat dolores. Iure recusandae eos corporis nulla esse harum officiis fugiat asperiores. Sit illo nam repellat modi sed sapiente ducimus. Quasi mollitia, quaerat voluptatum nisi quo, reiciendis possimus dicta illum consequuntur officiis quae aliquam dolorum nesciunt. Vero distinctio sint veniam ullam minima earum officia possimus? Aliquid, sequi hic! Architecto obcaecati nulla suscipit repellat! Commodi, delectus voluptatem.</p>
                                    <p className='font-bold '>Job Requirements</p>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>HTML</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>CSS 3</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Tailwindcss</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nodejs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nextjs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Redux</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>FireBase</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Sanity</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>SQL</p>
                                    </div>
                                    <div className='text-primaryC'>6 Years Experiance <span className='ml-10 '>Remote And Office</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10 flex-col'>
                                <div className='mr-10 flex mb-10'>
                                    <div className='w-20 h-20 bg-gray-200 mr-5'></div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mt-3'>what is the job that the company provide </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '> Job Description </p>
                                    <p className='font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit ratione ipsa voluptatum adipisci provident harum deleniti cum, cumque magni culpa ipsum porro totam! Sapiente asperiores ab voluptates, qui consequatur rem quod reiciendis ipsam officia, ipsa accusantium molestiae. Nostrum tenetur numquam cupiditate harum deserunt reiciendis rerum ullam dolorum omnis quae.</p>
                                    <p className='font-bold '>Job Requirements</p>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>HTML</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>CSS 3</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Tailwindcss</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nodejs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nextjs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Redux</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>FireBase</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Sanity</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>SQL</p>
                                    </div>
                                    <div className='text-primaryC'>6 Years Experiance <span className='ml-10 '>Remote And Office</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10 flex-col'>
                                <div className='mr-10 flex mb-10'>
                                    <div className='w-20 h-20 bg-gray-200 mr-5'></div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mt-3'>what is the job that the company provide </p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold '> Job Description </p>
                                    <p className='font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis suscipit ratione ipsa voluptatum adipisci provident harum deleniti cum, cumque magni culpa ipsum porro totam! Sapiente asperiores ab voluptates, qui consequatur rem quod reiciendis ipsam officia, ipsa accusantium molestiae. Nostrum tenetur numquam cupiditate harum deserunt reiciendis rerum ullam dolorum omnis quae.</p>
                                    <p className='font-bold '>Job Requirements</p>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>HTML</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>CSS 3</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Tailwindcss</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nodejs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Nextjs</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Redux</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>FireBase</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>Sanity</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>SQL</p>
                                    </div>
                                    <div className='text-primaryC'>6 Years Experiance <span className='ml-10 '>Remote And Office</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default createJob