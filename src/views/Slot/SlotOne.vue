<template>
  <div>
    <p>SlotOne</p>
    <div>
      <h4>以下为匿名插槽</h4>
      <slot>插槽</slot>
      <p>------</p>
      <slot></slot>
    </div>
    <div>
      <h4>以下为具名插槽</h4>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
    <div>
      <h4>以下为作用域插槽</h4>
      <!-- 作用域插槽就是父组件在调用子组件的时候给子组件传了一个插槽，这个插槽为作用域插槽，
      同时声明从子组件接收的数据放在一个自定义属性内，并定义该数据的渲染方式，实现从子组件到父组件的数据传递 -->
      <template>
        <slot v-bind:user="user" name="ScopeOne">
          {{ user.lastName }}
        </slot>
      </template>

      <template>
        <slot v-bind:games="games" name="ScopeTwo"> 游戏列表 </slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotOne",
  data: () => {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      user: {
        lastName: "xingfan",
        firstName: "yao",
      },
    };
  },
};
</script>

<style>
p {
  margin: 0;
  padding: 5px;
}
h4 {
  margin: 0;
  padding: 10px;
}
</style>
