import React from 'react'

const Header2 = () => {
    const List = [
        {
            name: 'Bangalore'
        },
        {
            name: 'Culcutta'
        },
        {
            name: 'Mumbai'
        },
        {
            name: 'Delhi'
        },
        {
            name: 'Hyderabad'
        }
    ];
  return (
    <div>
        <div className='flex px-10 bg-gray-100 justify-between'>
            {
                List.map((e) => {
                    return (
                        <span>{e.name}</span>
                    )
                })
            }
        </div>
    </div>
    
  )
}

export default Header2