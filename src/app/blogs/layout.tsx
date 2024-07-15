import React from "react";
export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <>
    <h4>hello sir</h4>
    {children}
    </>
    );
  }
  