const express = require("express");
var  docController = require('../controllers/doctorController');
var  patController = require('../controllers/patientController');
var  bookController = require('../controllers/bookingController');

var router = express.Router();

router.post('/createDoctor', docController.createDoctor);
router.get('/getDoctorsList', docController.getAllDoctors);
router.get('/deleteAllDocs', docController.deleteAll);

router.post('/createPatient', patController.createPatient);
router.get('/getPatientsList', patController.getAllPatients);
router.get('/deleteAllPatients', patController.deleteAll);

router.get('/getBookingsList', bookController.getAllBookings);
router.get('/deleteAllBookings', bookController.deleteAll);

/*** Deliverable APIs ***/

router.post('/findWorkingHours', docController.findWorkingHoursOfDoc);
router.post('/createBooking', bookController.createBooking);
router.post('/updateWorkingHours', docController.updateWorkingHoursOfDoc);


module.exports=router;
