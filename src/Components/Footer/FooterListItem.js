import React from "react";

export default function FooterListItem({ name, linkExists, linkHref }) {
  if (linkExists) {
    return (
      <li>
        <a href={linkHref}>
          {name}
        </a>
      </li>
    );
  } else {
    return <li>{name}</li>;
  }
}
