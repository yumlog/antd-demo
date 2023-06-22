<template>
  <a-breadcrumb>
    <a-breadcrumb-item>
      <a-icon type="home" />
    </a-breadcrumb-item>
    <a-breadcrumb-item
      v-for="(route, index) in routes"
      :key="index"
    >
      <router-link :to="route.path">
        {{ route.name }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',

  data() {
    return {
      routes: [],
    };
  },

  mounted() {
    this.routes = this.$route.matched;
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      this.updateBreadcrumb(to);
      next();
    });
  },

  methods: {
    updateBreadcrumb(route) {
      this.routes = route.matched;
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-breadcrumb {
  margin: 16px 0;
}
</style>