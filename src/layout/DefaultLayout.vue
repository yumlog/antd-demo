<template>
  <a-layout>
    <Header/>
    <a-layout-content>
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout>
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
                <a-icon type="latop"/>작업
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
        <a-layout-content>
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultLayout',

  components: {
    Header,
    Footer,
  },

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
}
</style>