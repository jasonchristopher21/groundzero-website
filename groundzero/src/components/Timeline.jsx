import React from 'react'
import { timelineSchedule } from '../constants'

const Timeline = () => {
  return (
    <div className="text-white py-16" id="timeline">  
      <div className="heading">
        Timeline
      </div>
      <div className="my-12 grid place-items-center md:flex md:justify-center">
        {timelineSchedule.map((event) => (
          <div className="grid place-items-center md:flex">
            <div className="flex items-center md:grid md:place-items-center">
              <div className="absolute -ml-36 md:ml-0">
                <h2 className="ml-12 xs:ml-4 md:ml-0 md:-mt-20 md:text-center xs:text-base text-xs">
                  {new Date(event.date).toLocaleString("en-US", { dateStyle: "medium" })}
                </h2>
              </div>

              <div className="w-5 h-5 xs:w-20 xs:h-20 rounded-full border-4 border-white">
                
              </div>
              
              <div className="absolute px-10 xs:px-[100px] ss:px-28 md:px-0 w-20 xs:w-44 ss:w-fit md:w-44 inline-block align-top">
                <div className="md:mt-60 md:text-center md:text-base text-xs xs:text-sm space-y-2 md:space-y-1">
                  {event.title.map((title) => (
                      <div>
                        {title}
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${timelineSchedule.indexOf(event) == timelineSchedule.length - 1 ? 'hidden' : 'block' } grid place-items-center `}>
              <div className="w-1 h-40 ss:h-32 md:w-16 lg:w-28 md:h-1 bg-white">
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline