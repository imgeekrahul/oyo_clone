import Image from 'next/image'
import React from 'react'

const SingleHotel = () => {
  return (
    <div className='w-7/12 my-10 mx-auto'>
        <Image src={'https://cf.bstatic.com/xdata/images/hotel/max1024x768/464303942.jpg?k=24e506ebac37b9faee6d31c754f97af1b1362355fc4a28cf7bb4ec72624cfc5d&o=&hp=1'} alt="Hotel Image" width={2000} height={2000} className="w-full h-large-box my-5" />
        <div className=''>
            <h3 className='text-3xl font-bold text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet itaque quasi obcaecati? Repellat, enim voluptatum!</h3>
            <p className='text-xl my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam illum voluptate illo eum eaque, rem possimus esse aliquam voluptatibus obcaecati nesciunt amet libero! Sed, hic in quod consequuntur distinctio nam officiis sunt voluptas esse blanditiis eaque beatae dolores voluptatum autem reiciendis expedita quo, atque incidunt. Incidunt exercitationem facilis alias!</p>
            <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: 4500</button>
            <p className='text-xl font-bold my-5'>Facilities : </p>
            <ul className='flex text-xl justify-between'>
                <li>Swimming Pool</li>
                <li>Dogs</li>
                <li>Garden</li>
                <li>Loundry</li>
                <li>Cricket</li>
            </ul>
            <button className='w-60 h-14 rounded-lg bg-red-400 my-5 text-lg'>Book Now</button>
        </div>
    </div>
  )
}

export default SingleHotel