// import React from 'react'
// import {useState,useEffect} from 'react';
// import axios from 'axios';
import { COLORS } from "../../constants/colors"

function RecentPatient(props) {
   console.log(props);
   const { recentPatients=[] } = props
  return (
    <div>
        <div className="rounded-lg border border-gray-200 shadow-md m-5">
          <div className="flex flex-row p-2 border-b-1 border-gray-300" style={{backgroundColor:COLORS.primary}}>
          <h4 className="font-medium text-white  md:text-1xl ml-6">Recent Patient List</h4>
          </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">ID</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Clinic</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Phone No</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">City</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Address</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Age</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Gender</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Dob</th>
                  </tr>
                </thead>
                <tbody>
                {recentPatients.map((item,index) => (
                  <tr key={index}>
                    <td className="border-t px-6 py-4">{index +1 }</td>
                    <td className="border-t px-6 py-4">{item.clinic_name}</td>
                    <td className="border-t px-6 py-4">{item.first_name} {item.last_name}</td>
                    <td className="border-t px-6 py-4">{item.phone_number}</td>
                    <td className="border-t px-6 py-4">{item.address !=='null' && item.city !==null && item.city !== undefined ? item.city : '--'}</td>
                    <td className="border-t px-6 py-4">{item.address !=='null' && item.address !==null && item.address !== undefined ? item.address : '--'}</td>
                    <td className="border-t px-6 py-4">{item.age}</td>
                    <td className="border-t px-6 py-4">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${item.gender === 'male' ? 'bg-blue-300 text-white' : 'bg-red-300 text-white'}`}>
                    {item.gender ? item.gender.charAt(0).toUpperCase() + item.gender.slice(1) : '--'}
                    </span>
                    </td>
                    <td className="border-t px-6 py-4">
                      {item.dob}
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
    </div>
  )
}

export default RecentPatient