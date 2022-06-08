<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ aData }}</p>
    <br />
    <button class="tw-border-2" @click="cobaFetch">this is a button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aData: "asdasdad ",
    };
  },
  methods: {
    async cobaFetch() {
      let that = this;
      await fetch("http://localhost:3030/api", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "this is a message from vue client",
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          let temp = JSON.parse(response);
          that.aData = temp[0];
          console.log(typeof response);
          console.log(typeof temp);
          console.log(temp[0]);
        });
    },
  },
  mounted() {},
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
