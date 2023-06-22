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
          placeholder="성별을 선택해 주세요."
        >
          <a-select-option value="male">
            남성
          </a-select-option>
          <a-select-option value="female">
            여성
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="동물">
        <a-select
          v-decorator="[
            'select-multiple',
            {
              rules: [
                { required: true, message: '반려 중인 동물을 선택해 주세요.', type: 'array' },
              ],
            },
          ]"
          mode="multiple"
          placeholder="반려 중인 동물을 선택해 주세요."
        >
          <a-select-option value="cat">
            🐱 고양이
          </a-select-option>
          <a-select-option value="dog">
            🐶 강아지
          </a-select-option>
          <a-select-option value="rabbit">
            🐰 토끼
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="식사횟수">
        <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
        <span class="ant-form-text">
          회
        </span>
      </a-form-item>

      <a-form-item label="알림">
        <a-switch v-decorator="['switch', { valuePropName: 'checked', initialValue: 'checked' }]" />
      </a-form-item>

      <a-form-item label="점심메뉴">
        <a-radio-group v-decorator="['radio-group', { initialValue: 'b' }]">
          <a-radio value="a">
            냉면
          </a-radio>
          <a-radio value="b">
            김치볶음밥
          </a-radio>
          <a-radio value="c" disabled>
            햄버거
          </a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="시식평">
        <a-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
      </a-form-item>

      <a-form-item label="예상수명">
        <a-slider
          v-decorator="['slider', { initialValue: 65 }]"
          :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
        />
      </a-form-item>

      <a-form-item label="저녁메뉴">
        <a-checkbox-group
          v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
          style="width: 100%;"
        >
          <a-row>
            <a-col :span="8">
              <a-checkbox value="A">
                삼겹살
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox disabled value="B">
                샐러드
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="C">
                파스타
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="D">
                치킨
              </a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="E">
                덮밥
              </a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 10, offset: 3 }">
        <a-button type="primary" html-type="submit" block>
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
  },
};
</script>

<style lang="scss" scoped>

</style>