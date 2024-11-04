import React from "react";
import image from "../assets/images/image-equilibrium.jpg"
import clock from "../assets/images/icon-clock.svg"
import ethereum from "../assets/images/icon-ethereum.svg"
import view from "../assets/images/icon-view.svg"
import imageAvatar from "../assets/images/image-avatar.png"

const Card = () => {
  return (
    <>
      <div className="card bg-gray-200 p-2 rounded-md mx-3 min-h-72">
        <div className="imagecontainer rounded-2xl m-2 relative "><img src={view} alt="" className="imageview absolute top-[calc(50%-24px)] z-10  right-[calc(50%-24px)] hidden" /><img src={image} className="rounded-2xl imageEquilibrium" alt="" /></div>
        <section className="p-3">
          <h2 className="font-bold cursor-pointer hover:text-[var(--Cyan)]">Equilibrium #3429</h2>
          <p className="text-sm my-2  text-[var(--Softblue)]" >Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex justify-between my-2">
            <div className="flex items-center "><img src={ethereum} alt="" class="h-4 mr-1" /><span className="text-[var(--Cyan)] text-sm font-semibold">0.041 ETH</span></div>
            <div className="text-[var(--Softblue)] text-sm flex items-center"><img src={clock} alt="" className="h-4 mr-1" /><span>3 days left</span></div>
          </div>
        </section>
        <hr className="mx-2 border-[var(--Softblue)]  " />
        <section className="flex p-3  items-center">
          <img src={imageAvatar} alt="" className="h-7 border border-white border-solid rounded-full " />
          <span className="text-sm ml-2"><span className="text-[var(--Softblue)]">Creation of </span><b className="hover:text-[var(--Cyan)] cursor-pointer">Jules Wyvern</b></span>
        </section>
        
        
      </div>
    </>
  );
};

export default Card;
