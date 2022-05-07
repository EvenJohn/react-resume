
import React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navigate, useRoutes, Routes, Route } from 'react-router-dom'
import Loading from '../common/Loading'
import FrontendAuth from './FrontendAuth'
import ErrorPage from '../common/ErrorPage'

// 路由懒加载
const Container = lazy(() => import('../Container'))
const Login = lazy(() => import('../Login/Login'))
const Register = lazy(() => import('../Login/Register'))

// 创建路由表
const GetRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Login />
        }, 
        {
            path: '/login',
            element: <Login />
        }, {
            path: '/register',
            element: <Register />
        }, {
            path: '/main',
            element: <FrontendAuth><Container /></FrontendAuth>
        }, {
            path: '/error',
            element: <ErrorPage />
        }, {
            path: '*',
            element: <Navigate to="/error" />
        }
    ])
    return routes
}

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    {<GetRoutes/>}

                    {/* <Navigate to="xxx"/> 重定向 */}
                    {/* <Routes>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Login />}></Route>
                        <Route path='/main' element={<FrontendAuth><Container /></FrontendAuth>}></Route>
                        <Route path='*' element={<Navigate to="/404" />}></Route>
                    </Routes> */}
                </Suspense>
            </BrowserRouter>
        </div>
    )
}
