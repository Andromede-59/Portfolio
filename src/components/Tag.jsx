import React from 'react';

const Tag = ({ label }) => {
  const colors = {
    JavaScript: 'bg-yellow-500 text-white',
    React: 'bg-blue-500 text-white',
    Node: 'bg-green-500 text-white',
    Python: 'bg-blue-600 text-white',
    Django: 'bg-green-700 text-white'
  };

  return (
    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${colors[label] || 'bg-gray-300 text-black'}`}>
      {label}
    </span>
  );
};

export default Tag;
