import React from "react";
export default function Whatsapp() {
  return (
    <a href="https://wa.me/919910099645?text=I%27m%20interested%20in%20your%20web%20services" style={{
      position: `fixed`,
    width: `60px`,
    height: `60px`,
    bottom: `40px`,
    right: `40px`,
    backgroundColor: `#25d366`,
    borderRadius: `50px`,
    textAlign: `center`,
    fontSize: `30px`,
    boxShadow: `2px 2px 3px #999`,
      zIndex: `100`}} target="_blank">
   <img src="https://cdn.cdnlogo.com/logos/w/29/whatsapp-icon.svg" alt="Whatsapp" height={32} width={32} style={{ display: `inline`}} />
    </a>
  )
}