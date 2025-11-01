import { create } from "zustand";
import { KINDNESS_ACTIONS } from "./kindness-data";

interface CompletedAction {
  id: number;
  timestamp: number;
}

interface KindnessStore {
  currentKindness: { id: number; text: string; emoji: string };
  completed: CompletedAction[];
  completeKindness: () => void;
  getTodayCount: () => number;
  getThisWeekCount: () => number;
  getThisMonthCount: () => number;
  getNextKindness: () => void;
}

const getRandomKindness = () => {
  return KINDNESS_ACTIONS[Math.floor(Math.random() * KINDNESS_ACTIONS.length)];
};

const getTodayStart = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

const getWeekStart = () => {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day;
  now.setDate(diff);
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

const getMonthStart = () => {
  const now = new Date();
  now.setDate(1);
  now.setHours(0, 0, 0, 0);
  return now.getTime();
};

export const useKindnessStore = create<KindnessStore>((set, get) => ({
  currentKindness: getRandomKindness(),
  completed: [],

  completeKindness: () => {
    set((state) => ({
      completed: [
        ...state.completed,
        { id: state.currentKindness.id, timestamp: Date.now() },
      ],
      currentKindness: getRandomKindness(),
    }));
  },

  getTodayCount: () => {
    const today = getTodayStart();
    return get().completed.filter((item) => item.timestamp >= today).length;
  },

  getThisWeekCount: () => {
    const weekStart = getWeekStart();
    return get().completed.filter((item) => item.timestamp >= weekStart).length;
  },

  getThisMonthCount: () => {
    const monthStart = getMonthStart();
    return get().completed.filter((item) => item.timestamp >= monthStart)
      .length;
  },

  getNextKindness: () => {
    set({ currentKindness: getRandomKindness() });
  },
}));
