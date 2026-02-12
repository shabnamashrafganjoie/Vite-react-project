import React, { useState } from "react";
import { DeliveryIcon } from "@/components/ui/icons";

function ProductCard({ data }) {
  const { images, title, price, category, id } = data;

  const [activeIndex, setActiveIndex] = useState(0); // تصویر فعلی

  return (
    <div className="border border-gray-400 rounded-xl p-4 min-w-[200px] h-[432px] flex-1">
      {/* بخش تصویر */}
      <div className="h-40 w-full rounded-lg flex justify-center items-center overflow-hidden">
        {images?.[activeIndex] && (
          <img
            src={images[activeIndex]}
            alt={title}
            className="h-full object-contain w-full"
          />
        )}
      </div>

      {/* دایره‌ها برای انتخاب تصویر */}
      {images && images.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      <div className="border-b-[1px] border-gray-300 mt-[20px] mb-[20px]"></div>

      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>price : {price}</span>
      </div>
      <div>
        <span className="">category : {category}</span>
      </div>
    </div>
  );
}

export default ProductCard;
