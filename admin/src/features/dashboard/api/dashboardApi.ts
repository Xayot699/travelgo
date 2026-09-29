import {tours} from "../data/tours";
export async function dashboardData(){let bookings:any[]=[];try{bookings=JSON.parse(localStorage.getItem("travelgo_bookings")||"[]")}catch{};return{tours,bookings};}
