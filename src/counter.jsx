import { useSelector, useDispatch } from "react-redux"; // Importing useDispatch

import { add, remove } from "./Store/cartSlice";
import { useState } from "react";
const counter = () => {
  const dispatch = useDispatch();
  const ele = useSelector((state) => state.total);
  console.log(ele);

  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);

  const handleAdd = (data) => {
    dispatch(add(data));
    setAddition(0);
  };

  const handleRemove = (data) => {
    dispatch(remove(data));
    setSubtraction(0);
  };
  return (
    <div className="grid sm:grid-col-2 mt-6">
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className=" text-center border-2 w-full px-4 py-2 font-bold bg-[#0CBABA] rounded-md">
            Counter
          </h1>
          <h1 className=" w-full font-bold rounded-md text-2xl mb-6 p-2 border-2 px-40 py-6  text-white bg-[#EE5A24]">
            {ele}
          </h1>
        </div>
      </div>

      <div className="flex justify-center align-middle gap-4">
        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="enter number"
            value={addition}
            onChange={(e) => {
              setAddition(e.target.value);
            }}
            className="border-2 border-black rounded-md text-center px-4 py-2"
          />

          <button
            onClick={() => handleAdd(addition)}
            className="border-2 bg-blue-500 px-6 py-2 
 font-bold text-white rounded-md"
          >
            add
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="enter number"
            value={subtraction}
            onChange={(e) => {
              setSubtraction(e.target.value);
            }}
            className="border-2 border-black rounded-md text-center px-4 py-2"
          />
          <button
            onClick={() => handleRemove(subtraction)}
            className="border-2 bg-red-500 py-2 px-6 font-bold text-white rounded-md"
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default counter;
