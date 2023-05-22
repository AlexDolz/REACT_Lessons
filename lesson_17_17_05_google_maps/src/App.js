import React from 'react';

const App = () => {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <iframe
          width='100%'
          height='600'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tel-Ran.de%20GmbH+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        >
          {/* <a href='https://www.maps.ie/distance-area-calculator.html'>
            measure area map
          </a> */}
        </iframe>
      </div>
    </div>
  );
};

export default App;
