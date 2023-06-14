<template>
  <a-layout>
    <Header/>
    <a-layout-content style="padding: 0 50px">
      <Breadcrumb/>
      <a-layout style="padding: 24px 0; background: #fff">
        <Aside/>
        <a-layout-content :style="{ minHeight: '280px' }">
          <TransitionPage>
            <router-view/>
          </TransitionPage>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <Footer/>
  </a-layout>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Aside from '@/components/Aside'
import Footer from '@/components/Footer'
import TransitionPage from '@/components/TransitionPage'

export default {
  name: 'DefaultLayout',

  components: {
    Header,
    Breadcrumb,
    Aside,
    Footer,
    TransitionPage,
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

<style lang="scss">

</style>