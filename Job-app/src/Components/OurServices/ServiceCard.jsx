import React from 'react'

const ServiceCard = ({singleService}) => {
  return (
    <div className="w-[25rem] min-h-56 rounded-lg bg-white border border-accent shadow-xl p-2">
        <h2 className="h2 text-center py-1">{singleService.service}</h2>
        <p className="py-1">
          {singleService.description}
        </p>
        <div className="flex justify-center items-center py-1">
        <button className="button-action">Learn More</button>
        </div>  
    </div>
  )
}

export default ServiceCard