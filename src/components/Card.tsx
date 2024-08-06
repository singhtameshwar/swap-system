"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputSec, setInputSec] = useState("");
  const [sellToken, setSellToken] = useState("");
  const [buyToken, setBuyToken] = useState("");
  const [price,setprice]=useState("");
  console.log(price)
 
  useEffect(() => {
    if(sellToken&&buyToken){
      const url = ` https://api.0x.org/swap/v1/price?buyToken=${buyToken}&sellToken=${sellToken}&sellAmount=100000`;
      axios
        .get(url, {
          headers: { "0x-api-key": "f8a0dc95-a1b2-424b-9f91-839ea88e3e43" },
        })
        .then(function (response) {
          setprice(response.data.price);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log("its my error:", error);
        });
    }
}, [sellToken, buyToken]);

// useEffect(() => {
//   if (price && inputOne) {
//     setInputSec((price + inputOne));
//   }
// }, [price, inputOne]);

  const clearInputOne = () => {
    setInputOne("");
  };

  const clearInputSec = () => {
    setInputSec("");
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 border-inherit">
      <div className="card-body">
        <div className="container">
          <div className="flex justify-around">
            <button className="btn btn-link decoration-black">Market</button>
            <button className="btn btn-link decoration-black">Limit</button>
            <button className="btn btn-link decoration-black">CrossChain</button>
          </div>
        </div>

        <div className="container border-slate-300 border-y-2">
          <p className="mt-2 mb-2 text-xs">Sell</p>
          <div className="flex justify-between">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setSellToken(e.target.value)}
            >
              <option value="">choose</option>
              <option value="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee">
                ETH
              </option>
              <option value="0x6b175474e89094c44da98b954eedeac495271d0f">
                DAI
              </option>
              <option value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
                 USD
              </option>
            </select>
          </div>
          <div>
            <button className="btn btn-sm mt-3 mb-3" onClick={clearInputOne}>
              clear
            </button>
          </div>
        </div>

        <div className="container mt-2 mb-2">
          <input
            type="number"
            placeholder="0.0"
            className="input input-bordered input-secondary w-full max-w-xs"
            value={inputOne}
            onChange={(e) => setInputOne(e.target.value)}
          />
        </div>

        <div className="container border-slate-300 border-y-2">
          <p className="mt-2 mb-2 text-xs">Buy</p>
          <div className="flex justify-between">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setSellToken(e.target.value)}>
           <option value="">choose</option>
              <option value="0xdac17f958d2ee523a2206206994597c13d831ec7">
                ETH
              </option>
              <option value="0x6b175474e89094c44da98b954eedeac495271d0f">
                DAI
              </option>
              <option value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
                 USD
              </option>
            </select>
          </div>
          <div>
            <button className="btn btn-sm mt-3 mb-3" onClick={clearInputSec}>
              clear
            </button>
          </div>
        </div>

        <input
  type="number"
  placeholder="0.0"
  className="input input-bordered input-secondary w-full max-w-xs"
  // value={inputSec}
    />clear
        <div className="card-actions">
          <button className="btn btn-active btn-neutral">connectwallet</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
