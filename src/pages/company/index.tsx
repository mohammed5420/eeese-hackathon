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
                            <li className='border-b-4 border-primaryC px-4 text-primaryC pb-2 w-40 flex justify-center'>
                                <Link href={"/company/"}>Applications</Link>
                            </li>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/pinned"}>pinned</Link>
                            </li>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/JobLists"}>JobLists</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default createJob