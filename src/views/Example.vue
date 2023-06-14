<template>
  <div>
    <a-page-header
      title="🧱 예시"
      sub-title="This is Example page"
    />
    <a-divider orientation="left">
      Grid Form
    </a-divider>
    <a-form :form="form" :label-col="{ span: 3 }" :wrapper-col="{ span: 10}" @submit="handleSubmit">
      <a-form-item label="이름">
        <a-input v-decorator="['note', { rules: [{ required: true, message: '이름을 입력해 주세요.' }] }]" />
      </a-form-item>
      <a-form-item label="성별">
        <a-select
          v-decorator="[ 'gender', { rules: [{ required: true, message: '성별을 선택해 주세요.'}] }]"
          placeholder="성별을 선택하세요."
          @change="handleSelectChange"
        >
          <a-select-option value="male">
            남성
          </a-select-option>
          <a-select-option value="female">
            여성
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 10, offset: 3 }">
        <a-button type="primary" html-type="submit">
          제출
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Example',

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    };
  },

  mounted() {
    
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>