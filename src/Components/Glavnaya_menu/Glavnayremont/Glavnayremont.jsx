import React from 'react';
import icon from "../../assets/GlavnayR/icon.png"
import article from "../../assets/GlavnayR/article.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import wash from "../../assets/GlavnayR/wash.png"
import xolodelnik from "../../assets/GlavnayR/xolodilnik.png"
import dryer from "../../assets/GlavnayR/dryer.png"

const Glavnayremont = () => {
    return (
        <div className='px-[7.70vw] py-[1.38vw] w-[100%]'>
            <div className='flex justify-center items-center text-center flex-col'>
                <h2 className='text-[#3E3E3E] font-Gilroy text-[3.33vw] font-black mt-[4.86vw]'>Чем мы поможем?</h2>
                <h4 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-[400] mt-[1vw] w-[66.11vw]'>Наши жесткие критерии отбора мастеров позволяют держать качество ремонта на высшем уровне и оставлять гарантию.</h4>
                <img src={icon} alt="" />
            </div>
            <div className='pt-[1.94vw] flex gap-[1.38vw]'>
               <div className='w-[31.5%] bg-[#EDF3F6] rounded-[3px] cursor-pointer'>
                <h4 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-bold pt-[2.08vw] pl-[3.19vw]'>Ремонт стиральных машин</h4>
                <div className='pt-[2.36vw] flex items-center gap-[1.2vw]'>
                    <div className='pl-[2.08vw]'>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не сливает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Долго стирает </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Протекает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не отжимает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не влючается </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[2.77vw]'><img src={article} alt="" />Сильно шумит</h6>
                       <h3 className='text-[#3C93F0] font-Proxima text-[0.97vw] font-[600] uppercase pb-[2.08vw] flex items-center'>подробнее <ArrowForwardIcon className='text-[#3C93F0] ml-[0.59vw]'/></h3>
                    </div>
                    <div>
                      <img className='w-[14.16vw] h-[19.30vw]' src={wash} alt="" />
                    </div>
                </div>
               </div>
               <div className='w-[31.5%] bg-[#EDF3F6] rounded-[3px] cursor-pointer'>
                <h4 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-bold pt-[2.08vw] pl-[3.19vw]'>Ремонт хлодильников</h4>
                <div className='pt-[2.36vw] flex items-center gap-[1.2vw]'>
                    <div className='pl-[2.08vw]'>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не сливает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Долго стирает </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Протекает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не отжимает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не влючается </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[2.77vw]'><img src={article} alt="" />Сильно шумит</h6>
                       <h3 className='text-[#3C93F0] font-Proxima text-[0.97vw] font-[600] uppercase pb-[2.08vw] flex items-center'>подробнее <ArrowForwardIcon className='text-[#3C93F0] ml-[0.59vw]'/></h3>
                    </div>
                    <div>
                      <img className='w-[14.16vw] h-[19.30vw]' src={xolodelnik} alt="" />
                    </div>
                </div>
               </div>
               <div className='w-[31.5%] bg-[#EDF3F6] rounded-[3px] cursor-pointer'>
                <h4 className='text-[#3E3E3E] font-Proxima text-[1.66vw] font-bold pt-[2.08vw] pl-[3.19vw]'>Ремонт посудомоечных машин</h4>
                <div className='pt-[2.36vw] flex items-center gap-[1.2vw]'>
                    <div className='pl-[2.08vw]'>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не сливает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Долго стирает </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Протекает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не отжимает</h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[0.48vw]'><img src={article} alt="" />Не влючается </h6>
                       <h6 className='flex items-center gap-[1vw] text-[#3E3E3E] font-Proxima text-[0.97vw] font-[400] pb-[2.77vw]'><img src={article} alt="" />Сильно шумит</h6>
                       <h3 className='text-[#3C93F0] font-Proxima text-[0.97vw] font-[600] uppercase pb-[2.08vw] flex items-center'>подробнее <ArrowForwardIcon className='text-[#3C93F0] ml-[0.59vw]'/></h3>
                    </div>
                    <div>
                      <img className='w-[14.16vw] h-[19.30vw]' src={dryer} alt="" />
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Glavnayremont;
