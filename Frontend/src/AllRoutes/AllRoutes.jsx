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

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Private><Dashboard/></Private>}/>
            <Route path="/lactures" element={<Private><Lactures/></Private>} />
            <Route path="courses" element={<Private><Courses/></Private>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin-dashboard" element={<AdminDashboard/>} />
            <Route path="/admin-addcourses" element={<AdminAddCourses/>} />
            <Route path="/admin-addlactures" element={<AdminAddLacture/>} />
        </Routes>
    </div>
  )
}
