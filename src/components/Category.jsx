import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:shadow-lg duration-300 cursor-pointer shadow-black"
            key={index}
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
