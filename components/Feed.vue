<template>
  <div class="feed-wrapper">
    <div class="feed-list">
      <ul>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <img src="https://placeimg.com/400/400/any">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.feed-wrapper {
  text-align: center;
  width: 100%;

  ul {
    max-width: 1000px;
    padding: 0 10px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc(50% - 10px);
      height: 350px;
      margin: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (min-width: 890px) {
        width: calc((100% / 3) - 10px);
      }
    }
  }
  @media (min-width: 390px) {
    ul {
      padding: 0 35px;
    }
  }
  @media (min-width: 550px) {
    width: calc(100vw - 150px);
    margin-left: 150px;
  }
}
</style>
