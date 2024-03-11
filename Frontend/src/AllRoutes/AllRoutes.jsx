import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Register } from '../Pages/Register'
import { Dashboard } from '../Pages/Dashboard'
import { Lactures } from '../Pages/Lactures'
import { Courses } from '../Pages/Courses'
import { Login } from '../Pages/Login'
import { Private } from '../Pages/Private'
import { AdminDashboard } from '../Admin/AdminDashboard'
import { AdminAddCourses } from '../Admin/AdminAddCourses'
import { AdminAddLacture } from '../Admin/AdminAddLacture'
import { AdminScheduleLacture } from '../Admin/AdminScheduleLacture'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Private><Dashboard/></Private>}/>
            <Route path="/lactures" element={<Private><Lactures/></Private>} />
            <Route path="courses" element={<Private><Courses/></Private>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin-dashboard" element={<Private><AdminDashboard/></Private>} />
            <Route path="/admin-addcourses" element={<Private><AdminAddCourses/></Private>} />
            <Route path="/admin-addlactures" element={<Private><AdminAddLacture/></Private>} />
            <Route path="/admin-schedulelacture" element={<Private><AdminScheduleLacture/></Private>} />
        </Routes>
    </div>
  )
}
