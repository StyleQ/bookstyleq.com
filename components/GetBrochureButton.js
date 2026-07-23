"use client";

import { useState } from "react";
import BrochureModal from "@/components/BrochureModal";

// Renders a button (styled by the caller via className) that opens the brochure
// request modal, which emails the brochure via /api/subscribe.
export default function GetBrochureButton({ className = "", children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && <BrochureModal onClose={() => setOpen(false)} />}
    </>
  );
}
