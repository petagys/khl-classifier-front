<template>
  <div>
    <b-navbar id="header" toggleable="lg" type="dark" variant="primary">

      <b-navbar-brand >
        <img alt="picture" id="logo" src="../pictures/khl-long.png">
<!--        <span>KHL(hockey) news classifier</span>-->
      </b-navbar-brand>

<!--      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

      <b-collapse id="nav-collapse" is-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  #logo {
    width: 30%;
  }
  #header {
    background-color: #172533 !important;
    }
</style>
