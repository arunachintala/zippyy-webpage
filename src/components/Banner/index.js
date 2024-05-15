import React from 'react';
import banner from '../../assets/images/Banner.svg';
export default function Banner({ children }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={banner}
        alt='Banner'
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '0 8px 8px 0',
          marginBottom: '150px',
        }}
      />
      <div style={{ position: 'absolute', bottom: '-925px', left: '50%', transform: 'translateX(-50%)', padding: '10px', color: 'white' }}>
        {/* Add your bottom component here */}

        {children}
      </div>
    </div>
  );
}
