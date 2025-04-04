const express = require("express");
const router = express.Router();
const controller = require("./executive.controller");



router.get("/equipment_brokenedd", controller.getEquipment_brokened);
router.get("/brokendEquipment",controller.brokendEquipment);
router.get("/borrowEquipment" , controller.borrowEquipment);
router.get("/mostroomalldata", controller.mostroomalldata);
router.get("/daysroomday",controller.daysroomday);
router.get("/daysroomweek",controller.daysroomweek);
router.get("/daysroommount",controller.daysroommount);
router.get("/daysroomyear",controller.daysroomyear);
router.get("/useralldata",controller.useralldata);
router.get("/room_request",controller.room_request);
router.get("/student",controller.student);
router.get("/teacher",controller.teacher);
router.get("/equipment_brokened",controller.equipment_brokened);
router.get("/equipment",controller.equipment);
router.get("/image/:filename",controller.getImage);
router.get("/room_request_participant",controller.room_request_participant);
router.get("/user",controller.user);
// router.get("/roomdetail",controller.roomdetail);
router.get("/updateStatus",controller.updateStatus);
router.get("/TableBorrowEquipment",controller.TableBorrowEquipment);
router.get("/TableRoomListRequest",controller.TableRoomListRequest);
router.get("/TableRoomBooked",controller.TableRoomBooked);
router.get("/TableBrokenEqipment",controller.TableBrokenEqipment);
router.get("/DataEquipment",controller.DataEquipment);
router.get("/mostreport",controller.mostreport);
router.get("/reportTable",controller.reportTable);
router.get("/box1",controller.box1);
router.get("/box2",controller.box2);
router.get("/box3",controller.box3);
router.get("/box4",controller.box4);
router.get("/box42",controller.box42);
router.get("/detailPop",controller.detailsPop);
router.get("equipment_brokened",controller.equipment_brokened);
router.get("/RejectReasons",controller.RejectReasons);
router.get("/submitRejection",controller.submitRejection);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;

>>>>>>> 975886b99b9b0511b59ecb91032847c19cfa6a67
