// import React from 'react'
import { Link } from "react-router-dom"
import Header from "../../components/header"
import Footer from "../../components/footer"
function AllClinic() {
  return (
    
    <div>
        <Header />
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
            <div className="w-full flex flex-row mb-4 ">
                    <h1 className="font-medium  md:text-2xl ml-6 mt-4">All Clinics</h1>
                    <Link to="/clinic/add-clinic" className="ml-auto rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80 mr-6 mt-4">Add Clinic</Link>
                </div>
                <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-9">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Name
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        City
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        State
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Zip Code
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Address
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Status
                        </th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900 ml-auto">Action</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        <tr className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="font-medium text-gray-700">{"C'N'C"} Homeopathy Clinic</div>
                            </th>
                            <td className="px-6 py-4">
                            <div className="font-medium text-gray-700">Jaipur</div>
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex gap-2">
                            <div className="font-medium text-gray-700">Rajstan</div>
                            </div>
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex gap-2">
                            <div className="font-medium text-gray-700">230099</div>
                            </div>
                            </td>
                            <td className="px-6 py-4">
                            <div className="font-medium text-gray-700">Noida, Uttar Pradesh</div>
                            </td>
                            <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                Active
                            </span>
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex gap-4">
                                <a  href="#" style={{color:"red"}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                                </a>
                                <a  href="#" style={{color:"green"}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                    />
                                </svg>
                                </a>
                            </div>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="font-medium text-gray-700">{"C'N'C"} Homeopathy Clinic</div>
                        </th>
                        <td className="px-6 py-4">
                        <div className="font-medium text-gray-700">Jaipur</div>
                        </td>
                        <td className="px-6 py-4">
                        <div className="flex gap-2">
                           <div className="font-medium text-gray-700">Rajstan</div>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <div className="flex gap-2">
                           <div className="font-medium text-gray-700">230099</div>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <div className="font-medium text-gray-700">Noida, Uttar Pradesh</div>
                        </td>
                        <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                            Active
                        </span>
                        </td>
                        <td className="px-6 py-4">
                        <div className="flex gap-4">
                            <a  href="#" style={{color:"red"}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                            </a>
                            <a  href="#" style={{color:"green"}}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                            </svg>
                            </a>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        <Footer />
    </div>
  )
}

export default AllClinic