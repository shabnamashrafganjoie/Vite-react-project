import React from "react";
import { Circles } from "react-loader-spinner";


function Loading() {
    return (
        <div className="w-full h-screen justify-center items-center flex">

<Circles
height="80"
width="80"
color="pink"
ariaLabel="Clock-Loader"
wrapperStyle={{}}
wrapperClass=""
visible={true}
>

</Circles>
        </div>
    );
  }
  
  export default Loading;
  