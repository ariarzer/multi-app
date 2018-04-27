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
  body {
    padding: 0px;
    margin: 0px;
  }

  a, a:active {
    outline: none;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-size: 20px;
  }

  .multi-app {
    --ind: 15px;

    display: grid;
    grid-template-rows: 10% auto;
    grid-template-columns: minmax(170px, 15%) 1fr;
    grid-template-areas: "header header" "sidebar app";

    width: 100%;
    height: 100%;

    background-color: #E7E8EC;
  }

  header,
  .link,
  .app {
    color: #243615;
  }

  header,
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header {
    grid-area: header;

    background-color: #9DDE5B;

    font-size: 30px;
    font-weight: bolder;
  }

  .sidebar {
    grid-area: sidebar;

    display: flex;
    flex-direction: column;

    margin-top: var(--ind);
  }

  .link {
    text-decoration: none;

    padding: var(--ind);
  }

  .link:hover {
    background-color: rgba(157, 222, 91, 0.5);
  }

  .router-link-active {
    background-color: rgba(157, 222, 91, 0.25);
  }

  .app {
    grid-area: app;

    background-color: white;
    border: 1px solid #E3E4E8;

    margin: var(--ind);
  }
</style>