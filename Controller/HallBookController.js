const Rooms =[
    {
        RoomId:"1",
        RoomName:"single Bed Room",
        Amenities:"Tv,Ac,single Bed and Heater",
        PerHourprice:"250",
        AvailableSeat:"2",
        status:"Now Availabe"
    },
    {
        RoomId:"2",
        RoomName:"Double Bed Room",
        Amenities:"Tv,Ac,single Bed and Heater",
        PerHourprice:"350",
        AvailableSeat:"4",
        status:"Booked"
    },
    {
        RoomId:"3",
        RoomName:"luxury  Bed Room",
        Amenities:"Tv,Ac,Hall, 2 Bed Rooms with Heater",
        PerHourprice:"900",
        AvailableSeat:"5",
        status:"Booked"
    },
    {
        RoomId:"4",
        RoomName:"Party Room",
        Amenities:"Tv,Ac,Big Hall 2 Bed  Rooms with Heater",
        PerHourprice:"1200",
        AvailableSeat:"6",
        status:"Now Availabe"
    },
]

const Booking =[
    {
      CustomerName:"Arshaath",
      BookingDate:"02/07/2024",
      StartTime:"10.00.am",
      EndTime: "06:59am",
      BookingId:"2",
      RoomId:"3"
    },
    {
        CustomerName:"Fayas",
        BookingDate:"02/07/2024",
        StartTime:"10.00.am",
        EndTime: "06:59am",
        BookingId:"1",
        RoomId:"4"
      }
]

export const getRoomDetails =(req,res)=>{
    res.status(200).json({data:Rooms})
}

export const getBookingDetails =(req,res)=>{
    res.status(200).json({data:Booking})
}

export const createRooms =(req,res)=>{
    const {RoomName, Amenities,PerHourprice,AvailableSeat,status} =req.body
    const newRooms = {
        id:Rooms.length+1,
        RoomName:RoomName,
        Amenities:Amenities,
        PerHourprice:PerHourprice,
        AvailableSeat:AvailableSeat,
        status:status
    }
       Rooms.push(newRooms)

    res.status(200).json({message:"Create rooms sucessfully",data:newRooms})
}

export const CreateBookingDetails =(req,res)=>{
    const {CustomerName,BookingDate, StartTime,EndTime}=req.body
    const newBooking ={
        id:Booking.length+1,
        CustomerName:CustomerName,
        BookingDate:BookingDate,
        StartTime:StartTime,
        EndTime:EndTime
    }
   Booking.push(newBooking)
   
   res.status(200).json({message:"Create Booking Sucessfully",data:newBooking})
}


export const getAllBookedRoom =(req,res)=>{
    const BookedRooms = Rooms.filter((ele)=>ele.status == "Booked");

    res.status(200).json({message:"All the Booked Rooms",data:BookedRooms})
}

export const getcustomerBooked =(req,res)=>{
    const customersBooked = Booking.map((ele=>{
        const room =Rooms.find((room)=>room.RoomId === ele.RoomId);
        return {
            CustomerName:ele.CustomerName,
            RoomName:room.RoomName,
            StartTime:ele.StartTime,
            EndTime:ele.EndTime,
            BookingDate:ele.BookingDate
        };
    }));
    res.status(200).json({message:"All the Booked Customers",data:customersBooked});
   
}


export const AllBookedcustomer  = (req,res)=>{
    const {CustomerName} = req.body;
    const bookingcus = Booking.filter((ele)=>ele.CustomerName == CustomerName)
    if(bookingcus.length === 0){
        return  res.status(404).json({message:"Customer Not Fouund"})
    }
    const custBooking =Booking.map((ele)=>{
        const room = Rooms.find((rooms)=>rooms.RoomId == ele.RoomId)
        return{
              CustomerName:ele.CustomerName,
              RoomName:room.RoomName,
              BookingDate:ele.BookingDate,
              StartTime:ele.StartTime,
              EndTime:ele.EndTime,
              BookingId:ele.BookingId,
              BookingDate:ele.BookingDate,
              status:room.status,
            
        }
    })
      
      res.status(200).json({message:"All the Booking and rooms details", data: custBooking})
      }


