<template>
  <div class="project-wrapper">
    <ImageDescription
      img="https://placeimg.com/500/500/any"
      title="Project 0"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, lacus quis scelerisque tempus, urna mauris ornare diam, in porttitor ante justo a odio. Duis tempor justo tincidunt augue laoreet, non maximus ante ullamcorper. Cras vel dapibus tortor. Duis libero ligula, varius eget elit in, varius vestibulum libero. Nulla convallis consectetur quam ut dapibus. Ut euismod ullamcorper orci a placerat. Vivamus vestibulum metus ac lorem pharetra mattis. Mauris euismod dui orci, ut aliquet justo semper ac. In suscipit, ex quis imperdiet gravida, erat ex commodo elit, quis tempor neque ante non mauris. Duis posuere, nunc ut congue scelerisque, urna libero fermentum nulla, quis molestie orci sem dapibus ligula. Vestibulum placerat ligula sit amet sagittis egestas."
    />
    <!-- <img src="https://placeimg.com/700/500/any">
    <img src="https://placeimg.com/700/500/any">
    <img src="https://placeimg.com/700/500/any">
    <img src="https://placeimg.com/700/500/any"> -->
    <div class="mock-pict" />
    <div class="mock-pict" />
    <div class="mock-pict" />
    <div class="mock-pict" />
  </div>
</template>

<script>
import ImageDescription from "~/components/ImageDescription";
export default {
  components: {
    ImageDescription
  }
}
</script>

<style lang="scss" scoped>
  .project-wrapper {
    padding: 15px;
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 550px) {
      margin-top: 0px;
      width: calc(100vw - 150px);
      margin-left: 150px;
      padding: 40px;
    }
    .mock-pict {
      max-width: 700px;
      width: 100%;
      height: 400px;
      margin-bottom: 10px;
      background-color: lightblue;
    }
  }
</style>
