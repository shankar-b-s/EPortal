const Circular = () => {
  return ( 
    <div className="circular flex justify-center align-middle p-14">
      <a href="/events">
        <button className="border-8 rounded-full border-black flex justify-center align-middle p-8 hover:animate-spin">
          <button className="border-8 rounded-full border-[#4167ED] m-8 px-24 py-32 cursor-pointer text-4xl animate-spin-slower text-black">
            <div className="hover:animate-none">Explore</div>
          </button>
        </button>
      </a>
    </div>
   );
}
 
export default Circular;