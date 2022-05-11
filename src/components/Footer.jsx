import React from "react";

function Footer(props) {
  return (
    <footer>
      <ul>
        {props.array.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </footer>
  );
}
export default Footer;
