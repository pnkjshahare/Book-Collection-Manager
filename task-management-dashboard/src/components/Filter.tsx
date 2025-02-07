const Filter = ({ setFilter }: { setFilter: (status: string) => void }) => {
    return (
      <div className="mb-6 flex gap-3">
        <button 
          onClick={() => setFilter("All")} 
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
        >
          All
        </button>
        <button 
          onClick={() => setFilter("Pending")} 
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Pending
        </button>
        <button 
          onClick={() => setFilter("Completed")} 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm"
        >
          Completed
        </button>
      </div>
    );
  };
  
  
  export default Filter;
  