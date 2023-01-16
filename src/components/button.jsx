import React from "react";

export const Button = (props) => {
  //   return <button onClick={props.onClick}>{props.children}</button>;
  return <button onClick={props.onClick} children={props.children} />;
};
