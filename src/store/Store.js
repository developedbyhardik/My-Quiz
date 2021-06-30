import { writable } from "svelte/store";

// API Prarameters
export const amount = writable({ title: "amount", value: 10 });
export const category = writable({ title: "category", value: null });
export const difficulty = writable({ title: "difficulty", value: null });
export const type = writable({ title: "type", value: null });

// User Score
export const score = writable(0);

// Starter Screen
export const isStart = writable(false);

//Reset Function
export function resetAll() {
  score.set(0);
  isStart.set(false);
  amount.set({ title: "amount", value: 10 });
  category.set({ title: "category", value: null });
  difficulty.set({ title: "difficulty", value: null });
  type.set({ title: "type", value: null });
}
