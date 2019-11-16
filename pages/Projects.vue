<template>
  <div class="projects-wrapper">
    <div class="projects-list">
      <ul>
        <li>
          <div class="curtain">
            <h3> Project 0 </h3>
          </div>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <div class="curtain">
            <h3> Project 1 </h3>
          </div>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <div class="curtain">
            <h3> Project 2 </h3>
          </div>
          <img src="https://placeimg.com/400/400/any">
        </li>
        <li>
          <div class="curtain">
            <h3> Project 3 </h3>
          </div>
          <img src="https://placeimg.com/400/400/any">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.projects-wrapper {
  padding: 15px;
  width: 100%;
  margin-top: 50px;

  @media (min-width: 550px) {
    margin-left: 150px;
    width: calc(100vw - 150px);
    padding: 40px;
  }

  .projects-list {
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding-left: 0;

      li {
        width: 50%;
        position: relative;
        overflow: hidden;
        padding: 5px;
        cursor: pointer;

        &:hover {
          .curtain {
            background-color: rgba(0, 0, 0, 0.5);

            h3 {
              opacity: 1.6;
            }
          }
        }
        .curtain {
          position: absolute;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          left: 5px;
          top: 5px;
          transition: background-color 0.5s ease;
          background-color: rgba(0, 0, 0, 0);
          display: flex;
          justify-content: center;
          align-items: center;

          h3 {
            text-transform: uppercase;
            opacity: 0;
            color: #fff;
            transition-delay: 0.4s;
            transition: opacity 0.2s ease;
            font-weight: lighter;
            letter-spacing: 1.5px;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (min-width: 550px) {
          width: 100%;
        }
        @media (min-width: 675px) {
          width: 50%;
        }
      }
    }
  }
}
</style>
