import List from './list';

console.log(List);

const ProductionHouse = () => {
  return (
    <div className="flex gap-2 md:gap-8 p-2 px-5 md:px-16">
      {List.map((item) => {
        return (
          <div
            key={item.id}
            className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
            />
            <img src={item.image} className="w-full z-[1] opacity-100" />
          </div>
        );
      })}
    </div>
  );
};

export default ProductionHouse;
