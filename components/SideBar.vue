<template>
  <div class="sidebar-wrapper">
    <div class="content-wrapper">
      <div class="title">
        <a class="h1" href="/">EVANAVEIT</a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a :class="{active : activeSidebar('about')}" href="/about">About</a>
          </li>
          <li>
            <a :class="{active : activeSidebar('projects')}" href="/projects">Projects</a>
          </li>
          <li>
            <a :class="{active : activeSidebar('contact')}" href="/contact">Contact</a>
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
  width: 150px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;

  .title {
    display: flex;
  }
  .h1 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: -5px;

    li {
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
  }
}
</style>
