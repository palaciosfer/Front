import React from 'react';

export function ButtonI(props) {
    const {text, className = ""} = props
  return (
    <button className={`mt-8 hover:text-black bg-[#C8C470] text-white py-2 px-4 rounded-md ${className}`}>
      {text}
    </button>
  );
}
