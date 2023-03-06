import React from "react";
import "./App.css";
const ImageWrapper = ()=>{}
const App = (props) => {
  return (
    <>
      <ImageWrapper
        width="500px"
        height="300px"
        border-radius="50%"
        onClick={()=>{}}
        title='sea' //може бути відсутнім
        tabIndex={5} //може бути відсутнім
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ocean-quotes-index-1624414741.jpg"
          alt="sea"
        />
      </ImageWrapper>
    </>
  );
};

export default App;
