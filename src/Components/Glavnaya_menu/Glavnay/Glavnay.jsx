import React from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import rus from "../../assets/Glavnay/rus.png"
import master from "../../assets/Glavnay/master.png"

const Glavnay = () => {
    return (
        <div className="px-[7.70vw] py-[1.38vw] bg-nav w-[100%] h-[110vh]">
            <div className='w-[100%] flex items-center'>
                <div className='w-[70%]'>
                    <h3 className='text-[#3E3E3E] font-Proxima text-[2.08vw] font-[600] pt-[8.80vw]'>БЫСТРО И ПРОСТО</h3>
                    <h1 className='text-white font-Gilroy text-[4.16vw] font-[900] uppercase pt-[2.08vw]'>РЕМОНТ БЫТОВОЙ ТЕХНИКИ</h1>
                    <h6 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-[400] flex items-center pt-[2.08vw]'><DirectionsRunIcon/>Выезд мастера от 30 минут</h6>
                    <div className='pt-[2.08vw]'>
                        <img className='absolute mt-[1.20vw] ml-[1.50vw]' src={rus} alt="" />
                        <input placeholder='+7 (999) 000-00-00' className='font-Gilroy text-[1.66vw] text-black font-[400] py-[1.18vw] rounded-[5px] pl-[5vw] outline-none'/>
                        <button  className='font-Gilroy text-[1.66vw] text-white font-[500] py-[1.18vw] px-[1.52vw] bg-[#3C93F0] rounded-[5px] ml-[-0.95vw] '>Заказать</button>
                    </div>
                </div>
                <div>
                    <img src={master} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Glavnay;
