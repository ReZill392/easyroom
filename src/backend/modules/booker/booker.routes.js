const express = require("express");
const router = express.Router();
const controller = require("./booker.controller");

router.get("/userBookings/:userId", controller.getUserBookings);
router.delete("/cancelBooking/:requestId", controller.cancelBooking);
router.get("/getBrokenEquipments", controller.getBrokenEquipments);
router.get("/image/:filename", controller.getBrokenEquipmentsImage);
// เพิ่มได้เรื่อย ๆ

module.exports = router;
