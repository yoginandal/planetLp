"use client";

export default function TableSection() {
  const eventData = [
    {
      city: "Mumbai (Andheri)",
      date: "5th December",
      day: "Thursday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Hyderabad",
      date: "6th December",
      day: "Friday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Delhi",
      date: "7th December",
      day: "Saturday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Vidyanagar",
      date: "13th December",
      day: "Friday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Vadodara",
      date: "14th December",
      day: "Saturday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Ahmedabad",
      date: "15th December",
      day: "Sunday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Chennai",
      date: "15th December",
      day: "Sunday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Jammu",
      date: "18th December",
      day: "Wednesday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Sri Lanka",
      date: "21st December",
      day: "Monday",
      time: "11:00 AM to 4:00 PM",
    },
    {
      city: "Manipal",
      date: "25th January",
      day: "Saturday",
      time: "11:00 AM to 4:00 PM",
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:px-8 lg:px-16 bg-[#f8efe7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#191e6e] mb-2">
            Event Highlights: Australia Education Fair
          </h2>
          <p className="text-gray-700">
            This is your chance to connect with top-ranked Australian
            universities and explore various opportunities to turn your study
            abroad dream into reality
          </p>
          <h3 className="text-xl font-bold text-[#B31942] mt-4">
            Event Schedule: Meet Us In Your City!
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#B31942] text-white">
                <th className="border border-gray-300 px-4 py-2">City</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Day</th>
                <th className="border border-gray-300 px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((event, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {event.city}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {event.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {event.day}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {event.time}
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
