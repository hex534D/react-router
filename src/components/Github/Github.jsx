import React, { useEffect, useState } from 'react';

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hex534d')
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      <h1 className="underline mb-6">Github account details</h1>
      <div className="flex justify-center gap-3">
        <img src={data.avatar_url} alt="github user avatar" className="w-24" />
        <div>
          <p>{data.name}</p>
          <p>{data.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Github;