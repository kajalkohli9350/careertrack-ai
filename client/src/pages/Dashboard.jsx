import { useEffect, useState } from "react";
import axios from "axios";


import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
function Dashboard() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

    const [search,
setSearch]
=
useState("");

    const [applications,
setApplications]
=
useState([]);



useEffect(() => {

 fetchApplications();

}, []);

const fetchApplications =
async () => {

 try{

 const token =
 localStorage.getItem("token");

 const res =
 await axios.get(

 "https://tracktern-ai.onrender.com/api/applications",

 {
  headers:{
   Authorization:
   `Bearer ${token}`
  }
 }

 );

 setApplications(
  res.data
 );

 }

 catch(error){

  console.log(error);

 }

};
const totalApplications =
applications.length;

const interviews =
applications.filter(

 app =>
 app.status === "Interview"

).length;
const offers =
applications.filter(

 app =>
 app.status === "Offer"

).length;
const rejected =
applications.filter(

 app =>
 app.status === "Rejected"

).length;

const filteredApplications =
applications.filter(

 app =>

 app.companyName
 .toLowerCase()
 .includes(
 search.toLowerCase()
 )

);

  return (
     <div>

      <Sidebar />

      <div className="main-content">

        <h1>
          Welcome, {user?.name}
        </h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Total Applications</h3>
            <p>{totalApplications}</p>
          </div>

          <div className="stat-card">
            <h3>Interviews</h3>
            <p>{interviews}</p>
          </div>

          <div className="stat-card">
            <h3>Offers</h3>
            <p>{offers}</p>
          </div>

          <div className="stat-card">
            <h3>Rejected</h3>
            <p>{rejected}</p>
          </div>

        </div>

        <div className="recent-section">

          <h2>Recent Applications</h2>

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

   {
    applications
    .slice(0,5)
    .map((app)=>(
     <tr key={app._id}>

      <td>
       {app.companyName}
      </td>

      <td>
       {app.role}
      </td>

      <td>
       {app.status}
      </td>

     </tr>
    ))
   }
   {
 applications.length === 0 && (

 <div className="empty-state">

  <h3>
   No Applications Yet
  </h3>

  <p>
   Start tracking your jobs
  </p>

 </div>

 )
}

  </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;