import React from "react";
import {Outlet} from "react-router-dom";

const OutreachPages : React.FC = () => {
  return (
    <div className= "outreacPage">
    <Outlet/>
    </div>
  );
};




export default OutreachPages;