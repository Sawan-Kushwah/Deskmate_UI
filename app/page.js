"use client"

import { useState, useEffect } from "react";
import data from "./api/hostel.json";

export default function Home() {
  //DropDown
  const showMore = (floorID) => {
    let floor = document.querySelectorAll(".floor-Details");
    floor[floorID].classList.toggle('max-sm:hidden');


    let arrowDown = document.querySelectorAll(".arrowDown");
    arrowDown[floorID].classList.toggle('max-sm:block');

    let arrowUp = document.querySelectorAll(".arrowUp");
    arrowUp[floorID].classList.toggle('hidden');


    let container = document.querySelectorAll(".container");
    container[floorID].classList.toggle('max-sm:h-60');
  }

  //Search
  const [queery, setQueery] = useState('');
  // console.log(queery);
  const filteredFloors = data.floors.filter((floor) =>
    floor.floor_number.toString().includes(queery.replace('floor', ''))
  );
  // console.log(filteredFloors)

  //counting vacancy
  const [vacating, setVacating] = useState({});
  const [vacancy, setvacancy] = useState(0);
  const [aval, setaval] = useState(0);
  const [occup, setoccup] = useState(0);
  useEffect(() => {
    const counts = {};
    let a = 0;
    let v = 0;
    let o = 0;
    data.floors.forEach(floor => {
      let vacatingCount = 0;
      floor.rooms.forEach(room => {
        room.beds.forEach(bed => {
          if (bed.availability === "vacating") {
            vacatingCount++;
            v++;
          }
          if (bed.availability === "available") {
            a++;
          }
          if (bed.availability === "unavailable") {
            o++;
          }
        });
      });
      counts[floor.floor_number] = vacatingCount;
    });

    setVacating(counts);
    setvacancy(v);
    setoccup(o);
    setaval(a);
  }, [data]);

  return (
    <>

      <div className="navbar flex justify-between pt-5 pb-7 w-4/5 mx-auto items-center max-sm:w-11/12">
        <div className="heading">
          <h1 className=' text-3xl font-bold max-md:text-xl'>Room Managment</h1>
        </div>
        <div className="searchBox flex border bg-white rounded-lg items-center">
          <img src="/frameIcons/search.png" alt="" width="30" height="30" className=' ml-2 cursor-pointer' />
          <input type="text" placeholder="floor1" className=' border-none outline-none p-3 max-md:w-20' value={queery} onChange={(e) => setQueery(e.target.value.toLowerCase())} />
          <img src="/frameIcons/bar.png" alt="" width="30" height="30" className=' mr-2 cursor-pointer' />
        </div>
      </div>


      <div className="header">
        <div className="row w-4/5 bg-white border flex justify-around items-center mx-auto rounded-xl max-sm:w-full">
          <div className="totalBeds w-1/5 text-center py-6">
            <div className="value font-bold text-4xl py-2">
              {vacancy + aval + occup}
            </div>
            <div className="text max-md:text-[10px]">
              Total Beds in PG
            </div>
          </div>
          <div className="availableBeds w-1/5 text-center py-6" style={{ color: "#379017" }}>
            <div className="value font-bold text-4xl py-2">
              {aval}
            </div>
            <div className="text max-md:text-[10px]">
              Total Available Beds
            </div>
          </div>
          <div className="vacant w-1/5 text-center py-6" style={{ color: "#D89A3D" }}>
            <div className="value font-bold text-4xl py-2">
              {vacancy}
            </div>
            <div className="text max-md:text-[10px]">
              Vacating in 60 days
            </div>
          </div>
          <div className="occupied w-1/5 text-center py-6" style={{ color: "#FF4B4B" }}>
            <div className="value font-bold text-4xl py-2">
              {occup}
            </div>
            <div className="text max-md:text-[10px]">
              Total Occupied Beds
            </div>
          </div>
        </div>
      </div>
      {
        filteredFloors.length > 0 ? (
          filteredFloors.map(floor => {
            return (
              <>
                <div className="container my-16 bg-white border w-4/5 mx-auto py-12 rounded-xl max-sm:w-full  max-sm:overflow-hidden max-sm:overflow-y-scroll" key={floor.floor_number}>
                  <div className="topButton flex justify-between items-center">
                    <div className="floorNumber absolute bg-white ml-6 mb-24 rounded-lg cursor-pointer flex justify-center items-center" onClick={() => showMore(floor.floor_number - 1)}>
                      <h1 className="text-2xl font-bold px-8 py-4">Floor {floor.floor_number}</h1>
                      <img src="/frameIcons/arrow.png" alt="" className='w-6 mr-3 hidden max-sm:block arrowDown' />
                      <img src="/frameIcons/arrowUp.png" alt="" className='w-12 hidden arrowUp' />
                    </div>
                    <div className="box absolute right-[12%] -mt-24 max-sm:right-[2%] bg-white rounded-lg p-3 flex justify-around items-center text-yellow-400 ">
                      <div className=" text-3xl font-bold">
                        {vacating[floor.floor_number]}
                      </div>
                      <div className=" w-3/5">
                        Beds Vacating in 60 days
                      </div>
                    </div>
                  </div>
                  <div className="tables flex max-sm:hidden max-md:flex-col floor-Details">
                    {floor.rooms &&
                      Array.from({ length: Math.ceil(floor.rooms.length / 5) }, (_, colIndex) => (
                        // Everytime i want new column to be inserted as room size increase more than 5 
                        <table
                          className="table-fixed Group1 w-2/6 max-md:w-full"
                          style={{ borderSpacing: "10px", borderCollapse: "separate" }}
                          key={colIndex}
                        >
                          <thead className="text-gray-400 text-sm py-2">
                            <tr className={colIndex != 0 ? "max-md:hidden" : ""} >
                              <th>Room no</th>
                              <th className="text-start whitespace-nowrap">Occupancy Availability</th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            {floor.rooms.slice(colIndex * 5, colIndex * 5 + 5).map((room) => (
                              <tr className="space-x-3" key={room.room_number}>
                                <td className="font-bold">{room.room_number}</td>
                                {room.beds &&
                                  room.beds.map((bed) => (
                                    <td key={bed.bed_id}>
                                      <div className="availability flex justify-start items-center">
                                        {bed.availability === "available" && (
                                          <img src="/frameIcons/FrameGreen.jpg" alt="" className="w-[25px]" />
                                        )}
                                        {bed.availability === "vacating" && (
                                          <img src="/frameIcons/FrameYellow.jpg" alt="" className="w-[25px]" />
                                        )}
                                        {bed.availability === "unavailable" && (
                                          <img src="/frameIcons/FrameRed.jpg" alt="" className="w-[25px]" />
                                        )}
                                      </div>
                                    </td>
                                  ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                  </div>
                </div>

              </>
            )
          })
        ) : (
          <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  text-red-600">404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p class="mb-4 text-lg font-light text-gray-950">Sorry, we can't find that <span className=" text-red-500">Floor</span> </p>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
}
