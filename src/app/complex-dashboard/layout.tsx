"use client";
import React, { useState } from 'react'

const Layout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleIsLoggedIn() {
    if (isLoggedIn === false) {
      setIsLoggedIn(true)
      return
    } else {
      setIsLoggedIn(false)
      return
    }
  }

  return isLoggedIn ? (
    <>
      <div className="text-center">{children}</div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          {users}
          {revenue}
        </div>
        {notifications}
      </div>
    </>
  ) : (
      <>
        {login}
        <button className="bg-gray-800 text-gray-300 rounded h-10" onClick={handleIsLoggedIn}>Submit</button>
      </> 
  );
}

export default Layout

