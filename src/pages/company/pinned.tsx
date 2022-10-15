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
                <div className=' w-full '>
                    <div className='flex justify-start mb-10'>
                        <ul className='flex'>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/"}>Applications</Link>
                            </li>
                            <li className='border-b-4 border-primaryC px-4 text-primaryC pb-2 w-40 flex justify-center'>
                                <Link href={"/company/pinned"}>pinned</Link>
                            </li>
                            <li className='border-b-4 border-gray-300 px-4 pb-2 text-gray-300 w-40 flex justify-center'>
                                <Link href={"/company/JobLists"}>JobLists</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex '>
                        <div className='p-4 border mr-10 text-xl'>
                            <div>
                                <select about='Job Role' className='border pr-8 pl-6 py-2 rounded-full mb-4'>
                                    <option>
                                        Remote option
                                    </option>
                                    <option>
                                        Office option
                                    </option>
                                </select>
                            </div>
                            <div>
                                <select about='Job Role' className='border pr-8 pl-6 py-2 rounded-full mb-4'>
                                    <option>
                                        Remote option
                                    </option>
                                    <option>
                                        Office option
                                    </option>
                                </select>
                            </div>
                            <div>
                                <select about='Job Role' className='border pr-8 pl-6 py-2 rounded-full mb-4 '>
                                    <option>
                                        Remote option
                                    </option>
                                    <option>
                                        Office option
                                    </option>
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
                                </div>
                            </div>
                            <div className='flex p-8 border mb-10'>
                                <div className='mr-10 '>
                                    {/* iamge  */}
                                    <div className='w-20 h-20 bg-blue-200 rounded-full'></div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className='font-bold mt-2 text-xl'>User name</h3>
                                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit ab ipsa neque nam accusantium praesentium, beatae ipsum atque porro repellat explicabo accusamus quod cum, quam libero quis obcaecati. Nulla, quibusdam. Praesentium quam, dicta consectetur officiis quaerat iste veritatis ipsa dolorum id incidunt at exercitationem laudantium aliquam assumenda earum voluptatum.</p>
                                    </div>
                                    <div className='flex mb-5'>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                        <p className='text-primaryC bg-blue-100 w-fit px-4 py-1 rounded-xl font-bold mr-2'>React</p>
                                    </div>
                                    <div className='text-gray-500'>6 Years Experiance <span className='ml-10 text-primaryC'>Remote</span></div>
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