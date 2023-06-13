<template>
  <!-- <div>
    <h1>여기가 헤더!! 🙀</h1>
  </div> -->
  <a-layout-header>
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['2']"
    >
      <a-menu-item key="1">
        메뉴1
      </a-menu-item>
      <a-menu-item key="2">
        메뉴2
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.ant-layout-header {
  height: auto;
  line-height: inherit;
  .ant-menu-item-selected {
    background-color: $primary;
  }
}
</style>