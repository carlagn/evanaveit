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
  width: calc(100vw - 150px);
  margin-left: 150px;
  text-align: center;
  ul {
    padding-left: 0;
    margin: 0 100px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc((100% / 3) - 10px);
      height: 350px;
      margin: 5px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
