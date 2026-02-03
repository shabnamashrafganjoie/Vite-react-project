import React from "react";
import { DeliveryIcon } from "@/components/ui/icons";
import { SupportIcon } from "@/components/ui/icons";
import { GuaranteeIcon } from "@/components/ui/icons";
import { ReturnCashIcon } from "@/components/ui/icons";

function Footer() {
    return (
        <div className="w-full flex bg-gray-100  h-auto px-[40px] py-[20px] items-center  ">
           <div className="w-[40%]">
            <h2 className="text-[20px] ">خوشحالی فروشی; بزرگترین فروشگاه آنلاین ایران</h2>
            <p className="text-[14px] leading-6 text-justify">
            خوشحالی فروشی سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی تبدیل شده است. خوشحالی فروشی به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد، بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه برای خرید آنلاین در ایران محسوب می‌شود.
            </p>
           </div>
           <div className="border-l border-gray-400 h-[200px] mx-[34px]"></div>

           <div className="flex justify-between w-[60%]">
            
            <div className="flex flex-col items-center">
            <DeliveryIcon className="size-[60px] text-gray-700" />  
            <p>تحویل اکسپرس و سریع</p>
            </div>

            <div className="flex flex-col items-center gap-y-[6px]">
            <SupportIcon className="size-[54px] text-gray-700" />  
            <p className="">پشتیبانی 24 ساعته</p>
            </div>
            <div className="flex flex-col items-center gap-y-[6px]">
            <ReturnCashIcon className="size-[54px] text-gray-700" />  
            <p> 7 روز ضمانت بازگشت کالا</p>
            </div>
            <div className="flex flex-col items-center gap-y-[6px]">
            <GuaranteeIcon className="size-[54px] text-gray-700" /> 
            <p>تضمین اصالت کالا</p> 
            </div>

           </div>
        </div>
    );
}

export default Footer;