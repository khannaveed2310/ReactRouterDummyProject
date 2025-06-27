import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/khannaveed2310')
        .then(res => res.json())
        .then(data => {
            setdata(data)
        })
    }, [data])
  return (
    <div className='text-center font-bold text-3xl m-8 text-gray-600'>Github following: {data.following}</div>
  )
}

export default Github