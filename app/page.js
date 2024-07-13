import Floor0 from "@/components/Floor0";
import Floor1 from "@/components/Floor1";
import Image from "next/image";
// FF4B4B (red)
// D89A3D (yellow)
// 379017 (green)
export default function Home() {
  return (
    <>
      <div className="header">
        <div className="row w-4/5 bg-white border flex justify-around items-center mx-auto rounded-xl max-sm:w-full">
          <div className="totalBeds w-1/5 text-center py-6">
            <div className="value font-bold text-4xl py-2">
              80
            </div>
            <div className="text max-md:text-[10px]">
              Total Beds in PG
            </div>
          </div>
          <div className="availableBeds w-1/5 text-center py-6" style={{ color: "#379017" }}>
            <div className="value font-bold text-4xl py-2">
              15
            </div>
            <div className="text max-md:text-[10px]">
              Total Available Beds
            </div>
          </div>
          <div className="vacant w-1/5 text-center py-6" style={{ color: "#D89A3D" }}>
            <div className="value font-bold text-4xl py-2">
              04
            </div>
            <div className="text max-md:text-[10px]">
              Vacating in 60 days
            </div>
          </div>
          <div className="occupied w-1/5 text-center py-6" style={{ color: "#FF4B4B" }}>
            <div className="value font-bold text-4xl py-2">
              65
            </div>
            <div className="text max-md:text-[10px]">
              Total Occupied Beds
            </div>
          </div>
        </div>
      </div>

      <Floor0 />
      <Floor1 />
    </>
  );
}
