const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative hover:shadow-md hover:shadow-black transition-shadow duration-300">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-black text-white mx-2 absolute bottom-4 hover:bg-orange-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Food Card"
        />
      </div>
      <div className="rounded-xl relative hover:shadow-md hover:shadow-black transition-shadow duration-300">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-black text-white mx-2 absolute bottom-4 hover:bg-orange-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80"
          alt="Food Card"
        />
      </div>
      <div className="rounded-xl relative hover:shadow-md hover:shadow-black transition-shadow duration-300">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">
            We deliver breakfast too
          </p>
          <p className="px-2">Tasty treats</p>
          <button className="border-white bg-black text-white mx-2 absolute bottom-4 hover:bg-orange-600 transition-colors duration-300">
            Order Now
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=749&q=80"
          alt="Food Card"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
