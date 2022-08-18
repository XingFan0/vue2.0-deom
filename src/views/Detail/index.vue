<template>
  <div id="Detail">
    <p>Detail</p>
    <router-link to="/Detail/GoodOne/1" tag="button" style="marginRight: 10px"
      >商品1</router-link
    >
    <router-link to="/Detail/GoodTwo/2" tag="button">商品2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
#Detail {
  height: 400px;
  border: 2px solid sandybrown;
}
</style>
