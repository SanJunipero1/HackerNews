import React from "react";
import FooterListItem from "./FooterListItem";
import { footerData } from "../../Data/footerData";


export default function FooterList() {
  const footerItems = footerData.map((item) => {
    return (
      <FooterListItem
        name={item.name}
        linkExists={item.linkExists}
        linkHref={item.linkHref}
      />
    );
  });
  return <ul id="linksFooter" className="flex m-2.5 gap-5 justify-center">{footerItems}</ul>;
}
