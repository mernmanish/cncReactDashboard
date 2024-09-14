// import React from 'react'
import { Link } from "react-router-dom"
import Header from "../../components/header"
import Footer from "../../components/footer"
function AddClinic() {
  return (
    <div>
        <Header />
        <div className="p-8 rounded border border-gray-200">
            <div className="flex flex-row">
            <h1 className="font-medium text-2xl">Add Clinic</h1>
            <Link to="/clinic/all-clinic" className="ml-auto rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80">All Clinics</Link>
            </div>
            <form>
                <div className="grid mt-8  grid-cols-1 lg:grid-cols-3 md:grid-cols-2" style={{gap:"1.5rem"}}>
                <div>
                    <label
                    htmlFor="name"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Clinic Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Clinic Name"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="email"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Email Address
                    </label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Email Address"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="phone"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Phone No
                    </label>
                    <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Phone No"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="city"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    City
                    </label>
                    <input
                    type="text"
                    name="city"
                    id="city"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter City"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="state"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    State
                    </label>
                    <input
                    type="text"
                    name="state"
                    id="state"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter State"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="zip_code"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Zip Code
                    </label>
                    <input
                    type="text"
                    name="zip_code"
                    id="zip_code"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Zip Code"
                    />
                </div>
                </div>
                <div className="grid mt-8  grid-cols-1 lg:grid-cols-1 md:grid-cols-1" style={{gap:"1.5rem"}}>
                <div>
                      <label
                      htmlFor="full_address"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                      Full Address
                      </label>
                      <input
                      type="text"
                      name="full_address"
                      id="full_address"
                      className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="Enter Full Address"
                      />
                  </div>
                </div>
                <div className="space-x-4 mt-8">

                <button
                    type="button"
                    className="rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add Clinic
                    {/* <ArrowRight className="ml-2" size={16} /> */}
                  </button>
                {/* Secondary */}
                <button className="px-3.5 py-1.5 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 font-semibold leading-7">
                    Cancel
                </button>
                </div>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default AddClinic