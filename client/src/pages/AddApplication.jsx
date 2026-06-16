import { useState } from "react";
import "./AddApplication.css";
import axios from "axios";

function AddApplication({ closeModal, fetchApplications, selectedApplication }) {
const [formData,
setFormData]
=
useState({

 companyName:
 selectedApplication?.companyName
 || "",

 role:
 selectedApplication?.role
 || "",

 status:
 selectedApplication?.status
 || "Applied",

 notes:
 selectedApplication?.notes
 || ""

});

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };


  const handleSubmit =
async(e)=>{

 e.preventDefault();

 try{

 const token =
 localStorage.getItem("token");

 if(selectedApplication){

  await axios.put(

  `http://localhost:5000/api/applications/${selectedApplication._id}`,

  formData,

  {
   headers:{
    Authorization:
    `Bearer ${token}`
   }
  }

  );

 }

 else{

  await axios.post(

  "http://localhost:5000/api/applications/add",

  formData,

  {
   headers:{
    Authorization:
    `Bearer ${token}`
   }
  }

  );

 }

 await fetchApplications();

 closeModal();

 }

 catch(error){

  console.log(error);

 }


};
  

  return (

    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

         <h2>

{
 selectedApplication

 ? "Edit Application"

 : "Add New Application"

}

</h2>

          <button
            onClick={closeModal}
            className="close-btn"
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <label>Company Name</label>

          <input
            type="text"
            name="companyName"
            onChange={handleChange}
          />

          <label>Role</label>

          <input
            type="text"
            name="role"
            onChange={handleChange}
          />

          <label>Status</label>

          <select
            name="status"
            onChange={handleChange}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <label>Notes</label>

          <textarea
            name="notes"
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>

            <button  type="submit" onClick={handleSubmit}> 
           {
 selectedApplication

 ? "Update Application"

 : "Save Application"

}
            </button>

          </div>

        </form>

      </div>

    </div>

  );
  };


export default AddApplication;