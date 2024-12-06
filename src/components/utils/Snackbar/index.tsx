"use client";

import React from "react";
import './styles.css';

interface SnackbarProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

export default function Snackbar({ message, type, visible }: SnackbarProps) {
  return (
    <div className={`snackbar ${type} ${visible ? "show" : "hide"}`}>
      {message}
    </div>
  );
}
