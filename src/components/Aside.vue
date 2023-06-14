<template>
  <a-layout-sider>
    <a-menu
      mode="inline"
      :default-selected-keys="['2']"
      :default-open-keys="['sub1']"
    >
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="user"/>유저
        </span>
        <a-menu-item key="1">
          유저 메뉴1
        </a-menu-item>
        <a-menu-item key="2">
          유저 메뉴2
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="laptop"/>작업
        </span>
        <a-menu-item key="3">
          작업 메뉴1
        </a-menu-item>
        <a-menu-item key="4">
          작업 메뉴2
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Aside',

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
.ant-layout-sider {
  width: 200px;
  background: #fff;
}
.ant-menu {
  height: 100%;
}
</style>