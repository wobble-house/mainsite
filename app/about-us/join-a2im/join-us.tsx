import React from "react"
import Image from "next/image";
import MemberBenefits from "../../../components/member-benefits";
import { JoinButtonSegment, LargeJoinButtonSegmentDark  } from "../../../components/segments";

function Join1 () {
    return (
      <div className="mx-auto">
          <div className="max-w-6xl mx-auto px-5">
            <div className="z-10 flex flex-col-reverse md:flex-row items-center md:justify-around mx-auto gap-10 px-10">
              <div className="flex-initial w-1/2 relative md:py-20 items-center max-w-xl">
                <p>Since 2005, when A2IM formed, our sector has grown from a market share
                   of under 25% to 37.32%. This significant increase illustrates the 
                   leadership role our sector has held over the last decade through our core objectives
                </p>
              </div>
              <div className="relative w-1/2 h-full m-10 max-w-xl">
                <Image
                  src="/images/red-arrow.png"
                  alt='indie week opening reception'
                  height={207}
                  width={300}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" />
              </div>
            </div>
          </div>
          </div>
          )};

function BenefitList () {
      return (
          <div className="mx-auto px-5 py-5">
            <h2 className="text-center text-3xl pb-5">Member Benefits</h2>
            <div className="mx-auto max-w-6xl">
              <MemberBenefits/>
            </div>
          </div>
      )}

function Join3 () {
      return ( 
        <div className="mx-auto p-5 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl flex flex-col md:flex-row md:justify-around items-center mx-auto gap-10">
            <div className="relative w-1/2 h-full">
            <Image
              src="/images/bg-community.webp"
              alt='a2im community photo'
              height={768}
              width={768}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
          </div>
          <div className="relative max-w-lg p-5">
            <h2 className="text-2xl">BEING AN A2IM MEMBER</h2>
            <hr className="a2im-border-wrap1 border-transparent mr-0"></hr>
            <div className="flex-initial relative items-center max-w-sm">
            <p className="pt-3">
            A2IM is a 100% dues-supported organization. We recognize the 
            entrepreneurial spirit of our members and the need to do what???s 
            in each individual business???s best interests.
            No A2IM member gives up an ounce of their Independence. 
            <br></br>
            <br></br>
            Our organization embraces various operations and business practices; 
            A2IM never negotiates deals on your behalf. Instead, we foster a 
            climate of respect towards Independent businesses, and strive 
            for equity for all content creators.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}


export default function JoinUS (){
  return (
    <>
    <Join1/>
    <JoinButtonSegment/>
    <BenefitList/>
    <LargeJoinButtonSegmentDark/>
    <Join3/>
    </>
  )
}