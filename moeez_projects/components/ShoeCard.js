import Image from "next/image";

const ShoeCard = ({ shoe, selected, onClick }) => {
  return (
    <div
      className={`relative rounded-xl p-4 sm:p-5 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] 
                  flex items-center justify-center transition-all duration-300 
                  ${selected ? "border-2 border-orange-500" : "border-2 border-transparent"} 
                  bg-[#E9ECFC]`}
      onClick={onClick}
    >
      {/* Decorative lines background (SVG or pseudo-background effect) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 C50,160 150,160 200,180"
            stroke="#c4c8e3"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,150 C50,130 150,130 200,150"
            stroke="#c4c8e3"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Shoe Image */}
      <Image
        src={shoe.thumbnail}
        alt={shoe.name}
        width={100}
        height={100}
        className="object-contain z-10"
      />
    </div>
  );
};

export default ShoeCard;