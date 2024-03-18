<template>
  <RouterView></RouterView>
</template>
<style src='./assets/css/main.css'></style>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

nav{
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;

  grid-column: 2/3;


  background-color: var(--bgc);
}
</style>
