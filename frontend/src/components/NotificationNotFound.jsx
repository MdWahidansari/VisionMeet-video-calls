import { BellIcon } from 'lucide-react'
import React from 'react'


const NotificationNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 text-center'>
        <div className='size-16 rounded-full bg-base-300 flex items-center justify-center mb-4'>
            <BellIcon className='size-8 text-base-content opacity-40'/>

        </div>
        <h3 className='text-lg font-semibold mb-2'>You don’t have any notifications yet</h3>
        <p className='text-base-content opacity-70 max-w-md'>
          This is where your friend requests and messages will show up.
        </p>

    </div>
  )
}

export default NotificationNotFound