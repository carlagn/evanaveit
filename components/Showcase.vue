<template>
  <div class="content-wrapper">
    <img src="https://placeimg.com/1000/1000/any">
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  height: 100vh;

  img {
    max-width: 686px;
    height: auto;
    width: 100%;
  }
  @media (min-width: 390px) {
    padding: 40px;
  }
  @media (min-width: 550px) {
    width: calc(100vw - 150px);
    margin-left: 150px;
  }
}
</style>
