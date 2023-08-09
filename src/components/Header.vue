<template>
  <a-layout-header>
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['0']"
    >
      <a-sub-menu
        v-for="menu in menus"
        :key="menu.id"
      >
        <span slot="title">
          <a-icon :type="menu.icon"/>
          <span>{{ menu.name }}</span>
        </span>
        <a-menu-item
          v-for="item in menu.items"
          :key="item.id"
        >
          <router-link
            :to="item.path"
          >
            <a-icon :type="item.icon"/>
            <span>{{ item.name }}</span>
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      menus: [
        {
          id: 'sub1',
          icon: 'user',
          name: '첫번째 메뉴',
          items: [
            {
              id: '0',
              path: '/home',
              icon: 'home',
              name: '메인',
            },
            {
              id: '1',
              path: '/about',
              icon: 'message',
              name: '소개',
            },
          ],
        },
        {
          id: 'sub2',
          icon: 'laptop',
          name: '두번째 메뉴',
          items: [
            {
              id: '2',
              path: '/example',
              icon: 'build',
              name: '예시',
            },
            {
              id: '3',
              path: '/notFound',
              icon: 'warning',
              name: '👽',
            },
          ],
        },
      ],
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
}
.logo {
  width: 120px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 28px 8px 0;
  float: left;
}
</style>