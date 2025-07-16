"use client"
import * as Icons from "lucide-react";
import React from 'react'

export default function getIconComponent(name: string) {
  const Icon = Icons[name as keyof typeof Icons];
  return Icon ? <Icon className="shrink-0 size-6" /> : null;
}
