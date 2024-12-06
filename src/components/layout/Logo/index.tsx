"use client";

import React from "react";
import Image from "next/image";
import LogoProps from "./types";

export default function Logo({ width = 50, height = 50 }: LogoProps) {
  return (
    <Image
      src="/images/logo.png" 
      alt="Logo"
      width={width}
      height={height}
      priority
    />
  );
}
