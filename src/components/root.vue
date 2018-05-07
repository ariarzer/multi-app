<template>
  <div class="organiser">

    <header class="header">Organiser</header>

    <div class="sidebar">
      <router-link to="/counter" class="link">Counter</router-link>
      <router-link to="/todo-list" class="link">TODO-list</router-link>
      <router-link to="/calculator" class="link">Calculator</router-link>
    </div>

    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  html,
  body {
    padding: 0px;
    margin: 0px;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-size: 20px;
  }

  .organiser {
    --indent: 15px;
    --button-size: calc(1em + 2 * var(--indent));

    --active-green: rgba(157, 222, 91, 0.25);
    --hover-green: rgba(157, 222, 91, 0.5);
    --light-green: rgb(157, 222, 91);
    --dark-green: rgb(36, 54, 21);
    --dark-grey: rgb(227, 228, 232);

    display: grid;
    grid-template-rows: 10% auto;
    grid-template-columns: minmax(170px, 15%) 1fr;
    grid-template-areas: "header header" "sidebar app";

    width: 100%;
    height: 100%;

    background-color: rgb(237, 238, 240);
  }

  .header,
  .link,
  .app {
    color: var(--dark-green);
  }

  .header,
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    grid-area: header;

    background-color: var(--light-green);

    font-size: 30px;
    font-weight: bolder;
  }

  .sidebar {
    grid-area: sidebar;

    display: flex;
    flex-direction: column;

    margin-top: var(--indent);
  }

  .link {
    text-decoration: none;

    padding: var(--indent);
  }

  .link:hover {
    background-color: var(--hover-green);
  }

  .router-link-active {
    background-color: var(--active-green);
  }

  .app {
    grid-area: app;

    background-color: white;
    border: 1px solid var(--dark-grey);

    margin: var(--indent);
  }

  .button {
    background-color: var(--light-green);
    border-radius: 3px;
    border: none;

    height: var(--button-size);
    width: var(--button-size);

    padding: var(--indent);
  }

  .button:active {
    background-color: var(--light-green);
  }
</style>
