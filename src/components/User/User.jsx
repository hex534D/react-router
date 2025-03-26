import React from 'react';
import { useParams } from 'react-router';

const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex justify-center items-center p-6 bg-orange-400">
      <p className="font-sans text-3xl">
        User: {userid}
      </p>
    </div>
  );
};

export default User;
