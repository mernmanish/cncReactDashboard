// import React from 'react'
import useHome from './hook/useHome'

import Header from "../../components/header"
import Footer from "../../components/footer"
import RecentPatient from "../../components/dashboard/recentPatient"
import Counter from "../../components/dashboard/counter"

const Home = () => {
  const { recentPatients } = useHome()
  return (
    <div>
      <Header />
      <Counter />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 px-2.5 mt-3 mb-12 ">
            <RecentPatient recentPatients={recentPatients}  />
        </div>
      <Footer />
    </div>
  )
}

export default Home