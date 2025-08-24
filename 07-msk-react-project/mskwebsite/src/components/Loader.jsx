import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] text-blue-950">
      <i className="fas fa-hippo fa-spin text-5xl mb-4"></i>
      <p className="text-lg font-semibold">Fetching your data... hang tight!</p>
    </div>
  );
};

export default Loader;
