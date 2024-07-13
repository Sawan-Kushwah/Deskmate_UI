"use client"
import React from 'react'

const Floor0 = () => {
    const showmore = () => {
        let show = document.getElementsByClassName('Group');
        console.log(show);
        let arrowDown = document.getElementById('arrowDown');
        let arrowUp = document.getElementById('arrowUp');
        if (show[0].classList.contains('max-sm:hidden') ) {
            show[0].classList.remove('max-sm:hidden');
            show[1].classList.remove('max-sm:hidden');
            arrowDown.classList.remove('max-sm:block');
            arrowUp.classList.remove('hidden');
        } else {
            show[0].classList.add('max-sm:hidden');
            show[1].classList.add('max-sm:hidden');
            arrowDown.classList.add('max-sm:block');
            arrowUp.classList.add('hidden');
        }
        console.log(show);
    }
    return (
        <div className="container my-16 bg-white border w-4/5 mx-auto py-5 rounded-xl max-sm:w-full">
            <div className="topButton flex justify-between items-center">
                <div className="floorNumber absolute bg-white ml-6 mb-14 rounded-lg cursor-pointer flex justify-center items-center" onClick={showmore}>
                    <h1 className="text-2xl font-bold px-8 py-4">Floor 0</h1>
                    <img src="/frameIcons/arrow.png" alt="" className='w-6 mr-3 hidden max-sm:block' id='arrowDown' />
                    <img src="/frameIcons/arrowUp.png" alt="" className='w-12 hidden' id='arrowUp' />

                </div>
            </div>
            <div className="tables flex justify-evenly max-md:flex-col">
                <table class="table-fixed Group1 w-2/6 max-md:w-full" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>G001</td>
                            <td>
                                <div className="availibity flex justify-start items-center">
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                    <div className="v pr-5">
                                        <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                    <div className="v pr-5">
                                        <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G002</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G003</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G004</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G005</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table-fixed Group w-2/6 max-md:w-full max-sm:hidden" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2 max-md:hidden'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>G006</td>
                            <td>
                                <div className="availibity flex justify-start items-center">
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                    <div className="v pr-5">
                                        <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G007</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G008</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="np pr-5">
                                    <img src="/frameIcons/FrameYellow.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G009</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G010</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                    </tbody>
                </table>

                <table class="table-fixed Group w-2/6 max-md:w-full max-sm:hidden" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2 max-md:hidden'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>G012</td>
                            <td>
                                <div className="availibity flex justify-start items-center">
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G014</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="np pr-5">
                                    <img src="/frameIcons/FrameYellow.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G015</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>G016</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Floor0