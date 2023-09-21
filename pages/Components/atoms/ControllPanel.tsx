import React from 'react'

const ControllPanel = () => {
  return (
    <div className='items-center justify-evenly rounded-xl m-2 p-2 bg-[#596400] border-[#DDEB78] border-2'>
      <div className='flex w-full justify-between'>
      <input type="text" className='m-1 p-2 rounded-2xl border-[#DDEB78] border-2' style={{minWidth:'65%'}} placeholder='Destination' />
      <button className='border-[#DDEB78] border-2 p-2 rounded-full bg-[#BEECDD] text-[#002019]'>Set Directions</button>
      <div className='p-2 border-2 border-[#DDEB78] rounded-xl bg-[#DDEB78]'>Time:</div>
      <div className='p-2 border-2 border-[#DDEB78] rounded-xl bg-[#DDEB78]'>Distance:</div>
    </div>
    </div>
  )
}

export default ControllPanel