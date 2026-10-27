import * as dotenv from 'dotenv';
dotenv.config();

/** Мінімальні утиліти без суворої типізації. */

export function add(a: number, b: number) {
  return a + b;
}

export function capitalize(s: string) {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}
