<template>
  <div class="id-wrapper">
    <div class="about">
      <div class="image-place">
        <img :src="require(`~/assets/${img}`)">
      </div>
      <div class="about-content">
        <h2>{{title}}</h2>
        <p class="description">
          {{description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.id-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
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
    line-height: 1;
    margin-top: 20px;
    text-transform: uppercase;
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
      margin-top: -9px;
    }
  }
}
</style>
