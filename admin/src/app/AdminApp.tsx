import {useState} from "react";
import {AdminShell} from "../shared/layout/AdminShell";
import {LoginPage} from "../features/auth/pages/LoginPage";
import {DashboardPage} from "../features/dashboard/pages/DashboardPage";
export function AdminApp(){const[u,setU]=useState(()=>localStorage.getItem("travelgo_admin")==="1");if(!u)return <LoginPage onLogin={()=>{localStorage.setItem("travelgo_admin","1");setU(true)}}/>;return <AdminShell><DashboardPage/></AdminShell>}
