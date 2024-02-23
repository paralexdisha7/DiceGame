
const NumberSelector = ({error,setError, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
const numberSelectorHandler = (value) =>{
  setSelectedNumber(value)
  setError("");
}
  return (
    <div>
      <p className="text-center text-red-600 font-bold text-sm ">{error}</p>
      <div className="flex gap-4 mt-8 justify-center ">
        {arrNumber.map((value, i) => (
          <div
            className={` ${
              value === selectedNumber ? "box bg-slate-700 text-white" : "box "
            }`}
            key={i}
            onClick={()=> numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <h2 className="text-center my-2 text-lg font-semibold">Select a Number</h2>
    </div>
  );
};

export default NumberSelector;
