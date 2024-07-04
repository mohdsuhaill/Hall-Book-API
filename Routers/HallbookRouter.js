import express from "express";
import {  AllBookedcustomer, CreateBookingDetails, createRooms, getAllBookedRoom, getBookingDetails, getcustomerBooked, getRoomDetails } from "../Controller/HallBookController.js";


const router = express.Router('');

router.get('/roomsDetails',getRoomDetails)
router.get('/BookingDetails',getBookingDetails)
router.post('/createrooms',createRooms)
router.post('/createbooking',CreateBookingDetails)
router.get('/bookedrooms',getAllBookedRoom)
router.get('/customerBooked',getcustomerBooked)
router.get('/allbookedcustomer',AllBookedcustomer)

export default router; 