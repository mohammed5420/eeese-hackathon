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
                            Applications
                        </button>
                        <button className='btn bg-primaryC hover:bg-SecondaryC hover:text-black rounded-none'>
                            Create Job
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <Link href={"/company/"}></Link>
                            </li>
                            <li>
                                <Link href={"/company/pinned"}>pinned</Link>
                            </li>
                            <li>
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