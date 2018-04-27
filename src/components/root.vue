<template>
  <div class="multi-app">

    <header>Multifunctional application</header>

    <div class="sidebar">
      <router-link to="/app1" class="link">App1</router-link>
      <router-link to="/app2" class="link">App2</router-link>
    </div>

    <router-view class="app"></router-view>
  </div>
</template>

<style>
  html,
  body{
    padding: 0px;
    margin: 0px;
  }

  a, a:active {
    outline: none;
  }

  body{
    width: 100vw;
    height: 100vh;
    font-size: 20px;
  }

  .multi-app{
    display: grid;
    grid-template-rows: 10% auto ;
    grid-template-columns: minmax(170px, 15%) 1fr;
    grid-template-areas: "header header"
                         "sidebar app";

    width: 100%;
    height: 100%;
  }

  header,
  .app{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header{
    grid-area: header;
  }

  .sidebar{
    grid-area: sidebar;

    display: flex;
    flex-direction: column;
  }

  .app{
    grid-area: app;
  }
</style>