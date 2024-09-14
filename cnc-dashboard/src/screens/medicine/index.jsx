// import React from 'react'
import Header from "../../components/header"
import Footer from "../../components/footer"
import { COLORS } from "../../constants/colors"

function Medicine() {
  return (
    <div>
        <Header />
<div>
    <div className="rounded border border-gray-200">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
            <div className="flex flex-row p-2 border-b-2 border-gray-300" style={{backgroundColor:COLORS.primary}}>
                <h1 className="font-medium   md:text-1xl ml-6 text-white">Add Medicine</h1>
            </div>
            <form>
            <div className="grid mt-8  grid-cols-1 lg:grid-cols-1 md:grid-cols-1" style={{gap:"1.5rem"}}>
                <div className="p-6">
                    <label
                    htmlFor="name"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter your name"
                    />
                </div>
            </div>
            <div className="space-x-4 mt-1 p-6">

            <button
                type="button"
                className="rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                Add Medicine
                {/* <ArrowRight className="ml-2" size={16} /> */}
                </button>
            {/* Secondary */}
            <button className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 font-semibold leading-7">
                Cancel
            </button>
            </div>
            </form>
        </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
            <div className="flex flex-row p-2 border-b-2 border-gray-300" style={{backgroundColor:COLORS.primary}}>
                <h1 className="font-medium   md:text-1xl ml-6 text-white">All Medicines</h1>
            </div>
                <table className="p-6 min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                    Medicine
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
                      <div className="font-medium text-gray-700">CNC Medicine</div>
                    </th>
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
                </div>
            </div>
            </div>
        <Footer />
    </div>
  )
}

export default Medicine