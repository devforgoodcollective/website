"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";

const ScrollDownArrow = () => {
  const router = useRouter();

  return (
    <div
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
      onClick={() => router.push("/#impact")}
    >
      <ChevronDown className="h-8 w-8" />
    </div>
  );
};

export default ScrollDownArrow;