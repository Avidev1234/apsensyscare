import React from 'react'
import { Category, Productcont } from "../index"
import Smallbestseller from '../controler/Smallbestseller'
import Smallbrandoffer from '../controler/Smallbrandoffer'
export default function Homesmall() {
  return (
    <div>
      <div className="w-full flex flex-row justify-around ">
        <Category />
      </div>
      <div className="w-full flex flex-row justify-around ">
        <Productcont position='1' Header={true} />
      </div>
      <div className="w-full flex flex-row justify-around ">
       <Smallbestseller title={"Best Sellers"} count={true}/>
      </div>
      <div className="w-full flex flex-row justify-around ">
       <Smallbrandoffer title={"Featured Brands"}/>
      </div>
      <div className="w-full flex flex-row justify-around ">
        <Productcont position='2' Header={false} />
      </div>
      <div className="w-auto text-center p-[11px]">
        <img className="flex mx-auto w-full" src="../src/image/banner.png" alt="" />
      </div>
    </div>
  )
}
