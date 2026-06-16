const express =
require("express");

const router =
express.Router();

const protect =
require("../middleware/authMiddleware");

const {
 addApplication,getApplications , deleteApplication , updateApplication
}
=
require(
"../controllers/applicationController"
);

router.post(
"/add",
protect,
addApplication
);

router.get(
"/",
protect,
getApplications
);

router.get("/add", (req,res)=>{
  res.send("Application Route Working");
});
router.delete(
 "/:id",
 protect,
 deleteApplication
);

router.put(
 "/:id",
 protect,
 updateApplication
);

module.exports=router;