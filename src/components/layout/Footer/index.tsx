"use client";

import React from "react";
import Link from "next/link";
import './styles.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} Our Website</p>
      </div>
    </footer>
  );
}
