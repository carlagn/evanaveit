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
    padding: 10px;
    width: 100%;
    margin-top: 50px;
    @media (min-width: 550px) {
      margin-top: 0px;
      width: calc(100vw - 150px);
      margin-left: 150px;
      padding: 40px;
    }
    .about {
      display: flex;
      max-width: 1000px;
      margin: 0 auto;
      flex-direction: column;
      @media (min-width: 890px) {
        flex-direction: row;

        > div {
          margin: 0 10px;
        }
      }
    }
    .image-place {
      width: 70%;

      img {
        max-width: 100%;
      }
      @media (min-width: 700px) {
        width: 50%;
      }
    }
    .about-content {
      width: 100%;

      h2 {
        font-size: 30px;
        margin-bottom: 25px;
        line-height: 0.7;
        margin-top: 20px;
      }
      p {
        font-size: 14px;
        line-height: 1.5;
      }
      @media (min-width: 550px) {
        h2 {
          font-size: 60px;
        }
        p {
          font-size: 16px;
        }

      }
      @media (min-width: 890px) {
        width: 50%;
        h2 {
          margin-top: 0;
        }
      }
    }
  }
</style>
