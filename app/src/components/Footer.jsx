import React from "react";
import "./Footer.css";

function Footer(a) {
  return (
    <>
    <p>{a.year[2]} {a.company.name} | All Rights Reserved</p>
    </>
  );
}
export default Footer;
