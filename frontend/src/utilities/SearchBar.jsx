import lupa from "../media/lupa.png";

const SearchBar = () => {
    return (
        <div class="flex items-center">
            <input type="text" class="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
            <button class="px-4 py-3 bg-white text-black rounded-r-full">
                <img src={lupa} alt="Lupa" className="w-5 h-auto"></img>
            </button>
        </div>

    );
};


export default SearchBar;