import React from "react";

const TitleWithBorder = ({
  title,
  titleClassName,
  isBorderBototm = true,
}: {
  title: string;
  titleClassName?: string;
  isBorderBototm?: boolean;
}) => {
  return (
    <div className="w-full">
      <h3
        className={` text-[18px] font-bold text-[#00000099] mb-[7px] ${titleClassName} `}
      >
        {title}
      </h3>
      {isBorderBototm && (
        <div className=" flex items-center w-full h-[4px] ">
          <div className=" rounded-[10px] w-[50px] h-[4px] bg-[#0084FF] " />
          <div className=" flex-1 h-[1px] bg-[#E4E4E4] " />
        </div>
      )}
    </div>
  );
};

export default TitleWithBorder;
