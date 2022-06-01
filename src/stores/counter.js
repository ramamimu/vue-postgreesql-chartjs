import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const useCounterStore2 = defineStore({
  id: "counter2",
  state: () => ({
    counter: 10,
  }),
  getters: {
    doubleCount: (state) => state.counter * 10,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
