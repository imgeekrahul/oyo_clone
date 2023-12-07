import Image from "next/image"

import React from 'react'
import Link from 'next/link'

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-80 w-full mb-5 p-5">
        <div className="flex h-60">
            <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={200} height={200} className="w-96 mr-3" />
            <div className="grid grid-rows-3">
                <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={200} height={200} className="w-28" />
                <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={200} height={200} className="w-28" />
                <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={200} height={200} className="w-28" />
                <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={200} height={200} className="w-28" />
            </div>
            <div className="ml-20">
                <h2 className="font-bold text-2xl line-clamp-1">Lorem Ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia!</h2>
                <p className="text-justify my-5 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores placeat accusamus, suscipit, soluta eos expedita nihil itaque aspernatur numquam quas optio aut dignissimos, quae quidem exercitationem! Accusamus, suscipit voluptate.</p>
                <p className="text-2xl my-5">
                    <span className="font-bold">Facilities: </span>
                    <span>Free wifi, pet care, Swimming Pool, Beaches, Resort</span>
                </p>
                <div className="flex items-center">
                    <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: 4500</button>
                    <Link href={"/hotels/2"} className="text-xl font-bold text-red-600 ml-10">See Details</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel