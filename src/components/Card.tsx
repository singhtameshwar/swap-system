"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const Card = () => {
  const [inputOne, setinputOne] = useState("");
  const [inputSec, setinputSec] = useState("");
 

  const url = 'https://api.0x.org/swap/v1/quote?sellToken=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&buyToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&sellAmount=1000000000000000000'
  useEffect(() => {
    axios.get(url, { headers: { "0x-api-key": "f8a0dc95-a1b2-424b-9f91-839ea88e3e43" } })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="card bg-base-100 w-96 shadow-xl  border-2 border-inherit ">
      <div className="card-body">
        <div className="container">
          <div className="flex justify-around ...">
            <button className="btn btn-link decoration-black">Market</button>
            <button className="btn btn-link decoration-black">Limit</button>
            <button className="btn btn-link decoration-black">CrossChain</button>
          </div>
        </div>
        <div className="container border-slate-300 border-y-2">
          <p className="mt-2 mb-2 text-xs">Sell</p>
          <div className="flex justify-between ...">
            <div className="dropdown dropdown-left dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1">Click</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
                <li><a>Item 4</a></li>
              </ul>
            </div>
            <div><button className="btn btn-sm mt-3">clear</button></div>
          </div>
          <div className="container mt-2 mb-2">
            <input
            type="number"
            placeholder="0.0"
            className="input input-bordered input-secondary w-full max-w-xs"  onChange={(e) => setinputOne(e.target.value)} />
          </div>
        </div>
        <div className="container border-slate-300 border-y-2">
        <p className="mt-2 mb-2 text-xs">Buy</p>
          <div className="flex justify-between ...">
            <div className="dropdown dropdown-left dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1">Click</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
                <li><a>Item 4</a></li>
              </ul>
            </div>
            <div><button className="btn btn-sm mt-3">clear</button></div>
          </div>
          <div className="container mt-2 mb-2">
               <input
            type="number"
            placeholder="0.0"
            className="input input-bordered input-secondary w-full max-w-xs" onChange={(e)=>setinputSec(e.target.value)}/>
          </div>
        </div>
    
        <div className="card-actions">
        <button className="btn btn-active btn-neutral">connectwallet</button>
        </div>
      </div>
    </div>
  )
}

export default Card