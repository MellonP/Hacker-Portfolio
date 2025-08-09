// This file is part of the Glitch Matrix Nexus project.
// It contains utility functions for the application, such as class name merging.
// It uses clsx for conditional class names and tailwind-merge for merging Tailwind CSS
// class names to ensure no conflicts or duplicates.
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
