<template>
  <div class="projects-wrapper">
    <div class="projects-list">
      <ul>
        <li>
          <nuxt-link to="/projects/adorus">
            <div class="curtain">
              <h3> Adorus </h3>
            </div>
            <img src="~/assets/adorus/02.png">
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects/posters">
            <div class="curtain">
              <h3> Posters </h3>
            </div>
            <img src="~/assets/posters/cover.jpg">
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects/cave">
            <div class="curtain">
              <h3> Cave </h3>
            </div>
            <img src="~/assets/cave/cover_feed.png">
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/projects/waiting-for-your-text">
            <div class="curtain">
              <h3> Waiting for your text </h3>
            </div>
            <img src="~/assets/wfyt/08.png">
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.projects-wrapper {
  padding: 10px;
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
            text-align: center;
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
