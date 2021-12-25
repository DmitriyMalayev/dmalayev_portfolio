/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from "theme-ui";
import NextLink from "next/link";

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>;
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}

  
    </A>
  );
}


/* 
function Link
if there is a logo display the logo, but if we pass something different like text display that instead 
*/
