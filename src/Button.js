import React, { Component } from "react";
import "./Button.css";

function reloadPage() {
  window.location.reload();
}

class Button extends Component {
  render() {
    return (
        <div id="Button-Div">
      <button  className="Button-Load" onClick={reloadPage}>
        ReShuffle
      </button>
      </div>
    );
  }
}

export default Button;
