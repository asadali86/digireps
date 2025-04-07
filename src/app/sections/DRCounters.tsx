import React from 'react'
import ScrollCounter  from "@/components/Counter";

const stats = [
  { label: "Cost Savings Annually", value: 1 },
  { label: "Clients Served", value: 150 },
  { label: "Years Leadership Experience", value: 50 },
  { label: "Reps Placed", value: 350 },
];

export const DRCounters = () => {
  return (
    <section className='pl-25 pr-25 pb-25'>    
        <div className="bg-white py-12 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-200 py-8">
                {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center border-gray-200 px-4"
                    style={{
                    borderLeft: index !== 0 ? '1px solid #E5E7EB' : 'none',
                    }}
                >
                    <h2 className="font-medium txtBlue">
                    <ScrollCounter target={stat.value} duration={2000} />
                    </h2>
                    <p>{stat.label}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
    
  )
}

export default DRCounters;