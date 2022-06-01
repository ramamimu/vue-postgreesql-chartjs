<template>
  <div class="about">
    <h1>This is an about page {{ counter.counter }}</h1>
    <h1>tes 123 {{ datacoba }}</h1>
    <button @click="coba">plus plus</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { useCounterStore2 } from "@/stores/counter";

export default {
  setup() {
    const counter = useCounterStore2();
    return { counter };
  },
  methods: {
    coba() {
      console.log("masuk");
      const counter = useCounterStore2();
      // counter.$patch({ counter: counter.counter + 1 });
      counter.increment();
    },
    reset() {
      console.log("masuk reset");
      const counter = useCounterStore2();
      // counter.increment();
      counter.$reset();
    },
  },
  computed: {
    datacoba() {
      return this.counter.doubleCount + 1;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
