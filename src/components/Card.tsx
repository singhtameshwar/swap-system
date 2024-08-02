"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";

const Card = () => {
  const [inputOne, setinputOne] = useState("");
  const [inputSec, setinputSec] = useState("");
  const[sellToken,setsellToken] =useState("")
  const[buyToken,setbuyToken] =useState("")


  const url = `https://sepolia.api.0x.org/price/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=1000000000000000000`
  useEffect(() => {
    axios.get(url, { headers: { "0x-api-key": "f8a0dc95-a1b2-424b-9f91-839ea88e3e43" } })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sellToken, buyToken]);

  useEffect(() => {
    console.log(sellToken)
  }, [sellToken]);
  useEffect(() => {
    console.log(buyToken)
  }, [buyToken]);

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
            <select className="select select-bordered w-full max-w-xs"onChange={(e)=>setsellToken(e.target.value)}>
              <option value="">choose</option>
              <option value={"0x2728DD8B45B788e26d12B13Db5A244e5403e7eda"}>USDT</option>
              <option value={"0x8a21CF9Ba08Ae709D64Cb25AfAA951183EC9FF6D"}>LISK</option>
              <option value={" 0x0DB2a8Aa2E2C023Cfb61c617d40162cc9F4c27aB"}>DAI</option>
              <option value={"0xdFf7Ebb3f88D5D097F08C5522115D0656cB42314"}>OP</option>
              <option value={"0xb5B81A928A20070e5E9E888615f018affEbfe8de"}>ULT</option>
              <option value={"0x80Db7eB011c8Ca7F36ea280E7B60971df6dDdCC4"}>TTS</option>
            </select>
          </div>
          <div><button className="btn btn-sm mt-3 mb-3">clear</button></div>
        </div>
        <div className="container mt-2 mb-2">
          <input
            type="number"
            placeholder="0.0"
            className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setinputOne(e.target.value)} />
        </div>
        <div className="container border-slate-300 border-y-2">
          <p className="mt-2 mb-2 text-xs">Sell</p>
          <div className="flex justify-between ...">
            <select className="select select-bordered w-full max-w-xs" onChange={(e)=>setbuyToken(e.target.value)}>
              <option disabled value="">choose</option>
              <option value={"0x2728DD8B45B788e26d12B13Db5A244e5403e7eda"}>USDT</option>
              <option value={"0x8a21CF9Ba08Ae709D64Cb25AfAA951183EC9FF6D"}>LISK</option>
              <option value={" 0x0DB2a8Aa2E2C023Cfb61c617d40162cc9F4c27aB"}>DAI</option>
              <option value={"0xdFf7Ebb3f88D5D097F08C5522115D0656cB42314"}>OP</option>
              <option value={"0xb5B81A928A20070e5E9E888615f018affEbfe8de"}>ULT</option>
              <option value={"0x80Db7eB011c8Ca7F36ea280E7B60971df6dDdCC4"}>TTS</option>
            </select>
          </div>
          <div><button className="btn btn-sm mt-3 mb-3">clear</button></div>
        </div>
        <div className="container mt-2 mb-2">
          <input
            type="number"
            placeholder="0.0"
            className="input input-bordered input-secondary w-full max-w-xs" onChange={(e) => setinputSec(e.target.value)} />
        </div>
      <div className="card-actions">
        <button className="btn btn-active btn-neutral">connectwallet</button>
      </div>
    </div>
    </div>
  )
}
export default Card