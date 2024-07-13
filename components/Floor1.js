"use client"
import React from 'react'

const Floor1 = () => {
    const showmore1 = () => {
        let show = document.getElementsByClassName('GroupFloor1');
        let arrowDown1 = document.getElementById('arrowDown1');
        let arrowUp1 = document.getElementById('arrowUp1');
        console.log(show);
        if (show[0].classList.contains('max-sm:hidden')) {
            show[0].classList.remove('max-sm:hidden');
            show[1].classList.remove('max-sm:hidden');
            arrowDown1.classList.remove('max-sm:block');
            arrowUp1.classList.remove('hidden');
        } else {
            show[0].classList.add('max-sm:hidden');
            show[1].classList.add('max-sm:hidden');
            arrowDown1.classList.add('max-sm:block');
            arrowUp1.classList.add('hidden');
        }
    }
    return (
        <div className="container my-7 bg-white border w-4/5 mx-auto py-5 rounded-xl max-sm:w-full">
            <div className="topButton flex justify-between items-center">
                <div className="floorNumber absolute bg-white ml-6 mb-14 rounded-lg cursor-pointer flex justify-center items-center" onClick={showmore1}>
                    <h1 className="text-2xl font-bold px-8 py-4">Floor 1</h1>
                    <img src="/frameIcons/arrow.png" alt="" className='w-6 mr-3 hidden max-sm:block' id='arrowDown1' />
                    <img src="/frameIcons/arrowUp.png" alt="" className='w-12 hidden' id='arrowUp1' />
                </div>
            </div>

            <div className="tables flex justify-evenly  max-md:flex-col">
                <table class="table-fixed Group w-2/6  max-md:w-full" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>101</td>
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
                            <td className=' font-bold'>102</td>
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
                            <td className=' font-bold'>103</td>
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
                            <td className=' font-bold'>104</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>105</td>
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
                <table class="table-fixed GroupFloor1 max-sm:hidden w-2/6 max-md:w-full" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2 max-md:hidden'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>106</td>
                            <td>
                                <div className="availibity flex justify-start items-center">
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                    <div className="np pr-5">
                                        <img src="/frameIcons/FrameYellow.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>107</td>
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
                            <td className=' font-bold'>108</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>109</td>
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
                            <td className=' font-bold'>110</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="o pr-5">
                                    <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                </div>
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
                    </tbody>
                </table>

                <table class="table-fixed GroupFloor1 w-2/6 max-md:w-full max-sm:hidden" style={{ borderSpacing: "10px", borderCollapse: "separate" }}>
                    <thead className=' text-gray-400 text-sm py-2 max-md:hidden'>
                        <tr>
                            <th>Room no</th>
                            <th className=' text-start'>Occupancy Avaibility</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className=' space-x-3'>
                            <td className=' font-bold'>111</td>
                            <td>
                                <div className="availibity flex justify-start items-center">
                                    <div className="o pr-5">
                                        <img src="/frameIcons/FrameRed.jpg" alt="" className=' w-[25px]' />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>112</td>
                            <td><div className="availibity flex justify-start items-center">
                                <div className="v pr-5">
                                    <img src="/frameIcons/FrameGreen.jpg" alt="" className=' w-[25px]' />
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td className=' font-bold'>114</td>
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
                            <td className=' font-bold'>116</td>
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

export default Floor1