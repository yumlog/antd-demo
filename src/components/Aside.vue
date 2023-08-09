<template>
  <a-layout-sider
    v-model="collapsed"
    :trigger="null"
    collapsible
  >
    <a-button
      class="trigger"
      type="primary"
      @click="collapsed = !collapsed"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      mode="inline"
      :default-selected-keys="['0']"
      :default-open-keys="['sub1']"
      :open-keys="openKeys"
      @openChange="onOpenChange"
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
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Aside',

  data() {
    return {
      collapsed: false,
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
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
              path: '/test',
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
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  position: relative;
  width: 200px;
  background: #fff;
}
.ant-menu {
  height: 100%;
}
.trigger {
  position: absolute;
  z-index: 10;
  top: 8px;
  left: -36px;
  border-radius: 4px 0 0 4px;
  padding: 0 10px;
}
</style>