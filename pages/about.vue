<template>
  <div class="about-wrapper">
    <div class="about">
      <div class="image-place">
        <img src="https://placeimg.com/500/500/any">
      </div>
      <div class="about-content">
        <h2>ABOUT</h2>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, lacus quis scelerisque tempus, urna mauris ornare diam, in porttitor ante justo a odio. Duis tempor justo tincidunt augue laoreet, non maximus ante ullamcorper. Cras vel dapibus tortor. Duis libero ligula, varius eget elit in, varius vestibulum libero. Nulla convallis consectetur quam ut dapibus. Ut euismod ullamcorper orci a placerat. Vivamus vestibulum metus ac lorem pharetra mattis. Mauris euismod dui orci, ut aliquet justo semper ac. In suscipit, ex quis imperdiet gravida, erat ex commodo elit, quis tempor neque ante non mauris. Duis posuere, nunc ut congue scelerisque, urna libero fermentum nulla, quis molestie orci sem dapibus ligula. Vestibulum placerat ligula sit amet sagittis egestas.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about-wrapper {
    width: calc(100vw - 150px);
    margin-left: 150px;
    padding: 40px;

    .about {
      display: flex;
      margin: 0 100px;

      > div {
        margin: 0 10px;
      }
    }
    .image-place {
      width: 50%;
    }
    .about-content {
      width: 50%;

      h2 {
        font-size: 60px;
        margin-bottom: 25px;
        line-height: 0.7;
      }
      p {
        line-height: 1.5;
      }
    }
  }
</style>
