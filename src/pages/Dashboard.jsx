import React, { useEffect, useState } from 'react'
// import Chart from "react-apexcharts";
import StatusCard from '../components/status-card/StatusCard'

import { getAllInfo } from '../api/dashboard'
import { vector1, vector2, vector3, vector4 } from '../assets/images'
import Breadcrumb from '../components/breadcrumb'
import { userAuth } from '../api/userAuth'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// const chartOptions = {
//   series: [
//     {
//       name: "Online Customers",
//       data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
//     },
//     {
//       name: "Store Customers",
//       data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
//     },
//   ],
//   options: {
//     color: ["#6ab04c", "#2980b9"],
//     chart: {
//       background: "transparent",
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//     },
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//     legend: {
//       position: "top",
//     },
//     grid: {
//       show: false,
//     },
//   },
// };

const Dashboard = () => {
  const [allInfo, setAllInfo] = useState([])
  const router = useHistory()
  useEffect(() => {
    userAuth(router, router.location)
    getAllInfo(setAllInfo)
  }, [])

  const statusCards = [
    {
      icon: vector1(),
      count: allInfo[0]?.students,
      title: 'Students',
    },
    {
      icon: vector2(),
      count: allInfo[0]?.staff,
      title: 'Staff',
    },
    {
      icon: vector3(),
      count: allInfo[0]?.faculties,
      title: 'Faculties',
    },
    {
      icon: vector4(),
      count: allInfo[0]?.departments,
      title: 'Departments',
    },
  ]

  return (
    <div>
      <Breadcrumb />
      <div className="card">
        <h2 className="page-header">Dashboard</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-6 col-md-6 col-lg-3" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
