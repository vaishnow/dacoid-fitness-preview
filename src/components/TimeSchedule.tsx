import Hour from "./Hour";

const TimeSchedule = () => {
  // const hours = [
  //   ...Array.from({ length: 12 }, (_, index) =>`${index<9?"0":''}${index+}:00 AM`),
  //   ...Array.from({ length: 12 }, (_, index) =>`${index<9?"0":''}${index+}:00 PM`),
  // ];

  const data = [
    // { hour: "02:00 AM" },
    // { hour: "03:00 AM" },
    // { hour: "04:00 AM" },
    // { hour: "05:00 AM" },
    { hour: "06:00 AM" },
    { hour: "07:00 AM", reminder: "Ab Workout, 7:30am" ,alignRight:true,isFinished:true, position:5},
    { hour: "08:00 AM" },
    { hour: "09:00 AM", reminder: "Upperbody Workout, 9am",alignRight:false,isFinished:true, position:0,isCurrentHour:true},
    { hour: "10:00 AM" },
    { hour: "11:00 AM" },
    { hour: "12:00 AM" },
    { hour: "01:00 PM" },
    { hour: "02:00 PM" },
    { hour: "03:00 PM", reminder: "Lowerbody Workout, 3pm",alignRight:false,isFinished:false, position:-15 },
    { hour: "04:00 PM" },
    { hour: "05:00 PM" },
    { hour: "06:00 PM" },
    { hour: "07:00 PM" },
    { hour: "08:00 PM" },
    { hour: "09:00 PM" },
    { hour: "010:00 PM" },
    { hour: "11:00 PM" },
    { hour: "12:00 PM" },
  ];

  return (
    <div>
      {data.map((data) => (
        <Hour key={data.hour} data={data}/>
      ))}
    </div>
  );
};
export default TimeSchedule;
