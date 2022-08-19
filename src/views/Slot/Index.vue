<template>
  <div id="SlotC">
    <p>插槽</p>
    <SlotOne>
      <span>插槽内容 </span>
      <!-- <span> 插槽内容{{message}}</span>  这是错误的插槽不能访问父级模板中内容 -->
      <template v-slot:header>
        <p>这是头部插槽内容</p>
      </template>
      <!-- 插槽名简写 # -->
      <template #main>
        <p>这是主体插槽内容</p>
      </template>
      <template v-slot:footer>
        <p>这是底部插槽内容</p>
      </template>
      <template v-slot:ScopeOne="slotProps">
        {{ slotProps.user.firstName }}
      </template>
      <template v-slot:ScopeTwo="{ games }">
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
      <!-- 动态插槽名 -->
      <template v-slot:[dynamicSlotName]> 动态插槽名控制 </template>
    </SlotOne>
  </div>
</template>

<script>
import SlotOne from "./SlotOne";
export default {
  data: () => {
    return {
      dynamicSlotName:'footer'
    };
  },
  name: "SlotC",
  components: {
    SlotOne,
  },
};
</script>

<style>
#SlotC {
  border: 2px solid sandybrown;
}
</style>
