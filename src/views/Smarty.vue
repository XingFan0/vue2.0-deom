<template>
  <div id="Smarty">
    <h3 style="textalign: center">模板语法</h3>
    <div>
      <span>插值:{{ meg }}</span
      ><br />
      <p>原始html:<span v-html="rawHtml"></span></p>
      <button v-bind:disabled="isButtonDisabled">通过v-bind添加属性</button>
      <p v-bind:id="'list-' + id">v-bind添加id</p>
      <p>模板表达式:{{ message.split("").reverse().join("") }}</p>
      <h4>指令</h4>
      <p v-if="seen">v-if：现在你看到我了</p>
      <a v-bind:href="url" v-bind:target="herfType">v-bind:跳转百度</a>
      <p v-bind:[attributeName]="color">v-bind动态参数：控制id和class</p>
      <h4>修饰符</h4>
      <form v-on:submit.prevent="onSubmit">
        <button>阻止默认行为</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      meg: "message",
      rawHtml: "通过v-html设置值",
      isButtonDisabled: true,
      id: 1,
      message: "123",
      seen: true,
      url: "https://www.baidu.com/",
      herfType: "_blank",
      attributeName: "id",
      color: "skyblue",
    };
  },
  name: "Smarty",
  methods: {
    onSubmit: function () {
      console.log("1233");
    },
  },
};
</script>

<style>
#Smarty {
  border: 2px solid sandybrown;
  text-align: left;
  padding-left: 5px;
}
p {
  margin: 0;
  padding: 0;
  margin: 5px;
}
#skyblue {
  background: skyblue;
}
.skyblue {
  color: skyblue;
}
</style>
