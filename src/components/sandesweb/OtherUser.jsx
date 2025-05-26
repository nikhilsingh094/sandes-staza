import React from 'react'

function OtherUser({users}) {
  return (
    <div className="overflow-y-auto flex-grow px-4">
          {users.map((user, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between hover:bg-gray-300 hover:mt-2 px-1 duration-300 hover:rounded-lg cursor-pointer"
            >
              <div className="flex gap-3 items-center py-2">
                <img
                  src={user.image}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2"
                />
                <p className="text-gray-600 font-medium">{user.name}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default OtherUser
