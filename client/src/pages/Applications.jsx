import { useState } from "react";
import Sidebar from "../components/Sidebar";
import AddApplication from "./AddApplication";
import "./Application.css";
import axios from "axios";
import { useEffect } from "react";
import { FaTrash , FaEdit}
from "react-icons/fa";

function Applications() {

  const [showModal, setShowModal] = useState(false);

 const [applications,
setApplications]
=
useState([]);
const [selectedApplication,
setSelectedApplication]
=
useState(null);

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

 "http://localhost:5000/api/applications",

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
const deleteApplication =
async(id)=>{

 try{

 const token =
 localStorage.getItem("token");

 await axios.delete(

 `http://localhost:5000/api/applications/${id}`,

 {
  headers:{
   Authorization:
   `Bearer ${token}`
  }
 }

 );

 await fetchApplications();

 }

 catch(error){

  console.log(error);

 }

}


  return (
    <div className="applications-layout">

      <Sidebar />

      <div className="main-content">

        <div className="applications-header">

          <h1>Applications</h1>

          <button
            className="add-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Application
          </button>

        </div>

        {showModal && (
         <AddApplication

 closeModal={() =>
 setShowModal(false)
 }

 fetchApplications={
 fetchApplications
 }
  selectedApplication={
  selectedApplication
    }

/>
        )}

        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Applied Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {applications.map((app) => (

                <tr key={app._id}>

                  <td>{app.companyName}</td>

                  <td>{app.role}</td>

                  <td>

                    <span
                      className={`status ${app.status}`}
                    >
                      {app.status}
                    </span>

                  </td>

                  <td>{app.appliedDate}</td>



 <td>

<button

 onClick={() => {

  setSelectedApplication(app);

  setShowModal(true);

 }}

>

 <FaEdit />

</button>

<button

 onClick={() =>
 deleteApplication(app._id)
 }

>

 <FaTrash />

</button>

</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Applications;