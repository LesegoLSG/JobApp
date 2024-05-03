import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceData from './ServiceData'

const OurServices = () => {
  return (
    <section className=" w-full h-auto py-6" id="Services">
      <div className="flex flex-col justify-center items-center">
        <h1 className="h1">Our <span className="text-secondary">Services</span></h1>
        <h3>Let's help you find a Job of your Dreams</h3>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center my-8 gap-4 ">
          {ServiceData.map((singleService) =>(
              <ServiceCard 
              key={singleService.id} 
              singleService={singleService}
              />
          ))
            
          }
      </div>
    </section>
  )
}

export default OurServices