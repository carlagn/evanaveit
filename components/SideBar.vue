<template>
  <div class="sidebar-wrapper">
    <div class="content-wrapper">
      <div class="title">
        <img src="~/assets/evanaveicon.png">
        <nuxt-link class="h1" to="/">EVANAVEIT</nuxt-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <nuxt-link :class="{active : activeSidebar('about')}" to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link :class="{active : activeSidebar('projects')}" to="/projects">Projects</nuxt-link>
          </li>
          <li>
            <a :class="{active : activeSidebar('contact')}" href="https://www.instagram.com/evanaveit" target="_blank">Instagram</a>
          </li>
          <li>
            <a :class="{active : activeSidebar('contact')}" href="mailto:evanaveit@gmail.com">E-mail</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => {
    return {
      // activeSidebar: null
    }
  },
  methods: {
    activeSidebar(id) {
      return this.$router.history.current.path.split("/")[1] === id
    }
  }
}

</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 10px;

  .content-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media (min-width: 550px) {
    width: 150px;
    height: 100vh;
    padding: 0 20px;

    .content-wrapper {
      display: block;
      width: auto;
    }
  }
  .title {
    display: flex;
    flex-direction: column;

    img {
      height: 100%;
      max-height: 50px;
      max-width: 50px;
      width: 100%;
      @media (min-width: 550px) {
        max-width: 100px;
        max-height: none;
        width: 100%;
        height: auto;
      }
    }
  }
  .h1 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: -5px;
    display: flex;
    li {
      margin-left: 10px;
      text-align: left;
      text-transform: uppercase;
      padding-bottom: 5px;

      &:hover {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: #000;

        &.active {
          font-weight: bold;
        }
      }
    }

    @media (min-width: 550px) {
      display: block;

      li {
        margin-left: 0;
      }
    }
  }
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 550px) {
    display: block;
  }
}
</style>
