"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAccount, useSendTransaction } from 'wagmi';
import { walletClient } from "@/utils/config";
import { Address } from "viem";
import { ethers } from "ethers";

const Card = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputSec, setInputSec] = useState("");
  const [sellToken, setSellToken] = useState("");
  const [buyToken, setBuyToken] = useState("");
  const [price, setPrice] = useState("");
  const { isConnected, address } = useAccount();


  async function getPrice() {
    if (!isConnected) {
      console.log("Connect your account");
    } else if (sellToken && buyToken && inputOne) {
      // https://api.0x.org/swap/v1/price?
      const url = `https://api.0x.org/swap/v1/price?sellAmount=${inputOne}&
buyToken=${buyToken}&sellToken=
${sellToken}`
      try {
        const response = await axios.get(url, {
          headers: { "0x-api-key": "f8a0dc95-a1b2-424b-9f91-839ea88e3e43" },
        });
        console.log(response)
        setPrice(response.data.buyAmount);
      } catch (err) {
        console.log("get price", err);
      }
    }
  }

  async function swapTokens() {
    if (!isConnected) {
      console.log("Connect your account");
    } else if (sellToken && buyToken && inputOne && price) {
      const url = `https://api.0x.org/swap/v1/quote?buyToken=${buyToken}&sellToken=${sellToken}&sellAmount=${inputOne}`;
      try {
        const response = await axios.get(url, {
          headers: { "0x-api-key": "f8a0dc95-a1b2-424b-9f91-839ea88e3e43" },
        });
        const { to, data, value } = response.data;
        const amountInWei = ethers.parseUnits(inputOne, 'ether');
        const hash = await walletClient.sendTransaction({
          account: address as Address,
          to: to,
          value: amountInWei,
          data
        })
      } catch (err) {
        console.log("swaptoken", err);
      }
    }
  }
  useEffect(() => {
    getPrice();
  }, [sellToken, buyToken, inputOne]);

  const clearInputOne = () => {
    setInputOne("");
  };
  return (
    <div className="card bg-base-100 max-w-full md:max-w-md shadow-xl border-2 border-inherit mx-auto my-4">
      <div className="card-body">
        <div className="container">
          <div className="flex justify-around">
            <button className="btn btn-link decoration-black">Market</button>
            <button className="btn btn-link decoration-black">Limit</button>
            <button className="btn btn-link decoration-black">CrossChain</button>
          </div>
        </div>
        <div className="container border-slate-300 border-y-2 mt-4">
          <p className="mt-2 mb-2 text-xs">Sell</p>
          <div className="flex justify-between">
            <select
              className="select select-bordered w-full md:max-w-xs"
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
                LINK
              </option>
            </select>
          </div>
          <div>
            <button className="btn btn-sm mt-3 mb-3" onClick={clearInputOne}>
              Clear
            </button>
          </div>
        </div>
        <div className="container mt-2 mb-2">
          <input
            type="number"
            min="0"
            value={inputOne}
            placeholder="0.0"
            className="input input-bordered input-secondary w-full md:max-w-xs"
            onChange={(e) => setInputOne(e.target.value)}
          />
        </div>
        <div className="container border-slate-300 border-y-2 mt-4">
          <p className="mt-2 mb-2 text-xs">Buy</p>
          <div className="flex justify-between">
            <select
              className="select select-bordered w-full md:max-w-xs"
              onChange={(e) => setBuyToken(e.target.value)}
            >
              <option value="">choose</option>
              <option value="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee">
                ETH
              </option>
              <option value="0x6b175474e89094c44da98b954eedeac495271d0f">
                DAI
              </option>
              <option value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
                LINK
              </option>
            </select>
          </div>
        </div>
        <input
          type="number"
          placeholder="0.0"
          className="input input-bordered input-secondary w-full md:max-w-xs"
          value={price}
          readOnly
        />
        <div>
          <button className="btn btn-sm mt-3 mb-3" onClick={swapTokens}>
            SWAP Token
          </button>
        </div>
      </div>
    </div>
  );
}
  ;

export default Card;
