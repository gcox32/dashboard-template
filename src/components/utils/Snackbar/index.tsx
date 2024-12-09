"use client";

import React from "react";
import { createPortal } from 'react-dom';
import './styles.css';

interface SnackbarProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

export default function Snackbar({ message, type, visible }: SnackbarProps) {
  if (typeof window === 'undefined') return null; // Guard for SSR

  return createPortal(
    <div className={`snackbar ${type} ${visible ? "show" : "hide"}`}>
      {message}
    </div>,
    document.body
  );
}
