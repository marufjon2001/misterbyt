import React from 'react';
import icon from "../../assets/GlavnayR/icon.png"
const Mastera = () => {
    return (
        <div className='px-[7.70vw] py-[1.38vw] w-[100%]'>
           <div className='flex justify-center items-center text-center flex-col pb-[4.09vw]'>
                <h2 className='text-[#3E3E3E] font-Gilroy text-[3.33vw] font-black mt-[4.86vw]'>Хорошие мастера у нас?</h2>
                <h4 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-[400] mt-[1vw] w-[66.11vw]'>Наши жесткие критерии отбора мастеров позволяют держать качество ремонта на высшем уровне и оставлять гарантию.</h4>
                <img src={icon} alt="" />
            </div>
            <div>
                <div className='bg-[#EDF3F6]  w-[56.94vw] rounded-[3px]'>
                    <div className='flex gap-[1vw]'>
                        <div>
                            <div className='w-[0.3vw] h-[3vw] bg-[#09D743]'></div>
                        </div>
                        <div>
                            <h4 className='text-[#3E3E3E] font-Proxima text-[1.25vw] font-semibold'>ПОДБЕРЕМ БЛИЖАЙШЕГО МАСТЕРА</h4>
                            <p className='text-[#3E3E3E] font-Proxima text-[0.90vw] font-[400]'>Введите ваш адрес, и узнайте где ближайший наш мастер. И рассчет время прибытия.</p>
                            
                        </div>
                    </div>
                    <div className=''></div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Mastera;
