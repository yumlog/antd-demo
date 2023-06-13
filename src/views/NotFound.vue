<template>
  <div>
    <h1>이 페이지는 👽이 훔쳤습니다</h1>
    <a-button @click="goBack">뒤로가기</a-button>
    <a-button @click="goHome">메인으로 돌아가기</a-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>

</style>