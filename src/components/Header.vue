<template>
  <a-layout-header>
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['0']"
    >
      <a-menu-item
        v-for="item in items"
        :key="item.id"
      >
        <router-link
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      items: [
				{
          id: '0',
					path: '/home',
					name: '메인',
				},
				{
          id: '1',
					path: '/about',
					name: '소개',
				},
        {
          id: '2',
					path: '/example',
					name: '예시',
				},
        {
          id: '3',
					path: '/test',
					name: '👽',
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