// import React from 'react'
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Link } from "react-router-dom"
import Button from "../../components/button"
function AddDoctor() {
  return (
    <div>
        <Header  />
        <div className="p-8 rounded border border-gray-200">
            <div className="flex flex-row">
            <h1 className="font-medium text-2xl">Add Doctor</h1>
            <Link to="/doctor/all-doctors" className="ml-auto rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80">All Doctors</Link>
            </div>
            <form>
                <div className="grid mt-8  grid-cols-1 lg:grid-cols-3 md:grid-cols-2" style={{gap:"1.5rem"}}>
                <div>
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
                    htmlFor="qualification"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Qualification
                    </label>
                    <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Qualification"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="reg_number"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Registration No
                    </label>
                    <input
                    type="text"
                    name="reg_number"
                    id="reg_number"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Registration No"
                    />
                </div>
                <div>
    
                    <label
                    htmlFor="work_place"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                    Work Place
                    </label>
                    <input
                    type="text"
                    name="work_place"
                    id="work_place"
                    className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter Work Place"
                    />
                </div>
                </div>
                <div className="grid mt-8  grid-cols-1 lg:grid-cols-1 md:grid-cols-1" style={{gap:"1.5rem"}}>
                <div>
                      <label
                      htmlFor="work_address"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                      Work Address
                      </label>
                      <input
                      type="text"
                      name="work_address"
                      id="work_address"
                      className="border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="Enter Work Address"
                      />
                  </div>
                </div>
                <div className="space-x-4 mt-8">
                <Button 
                label={"Add Doctor"}
                className={"rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"}
                disabled={true}
                />
                {/* <button
                    type="button"
                    className="rounded-md bg-black px-3.5 py-1.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add Doctor
                   
                  </button> */}
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

export default AddDoctor