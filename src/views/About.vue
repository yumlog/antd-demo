<template>
  <div>
    <a-page-header
      title="🎤 소개"
      sub-title="This is About page"
    />
    <a-divider orientation="left">
      Steps
    </a-divider>

    <a-steps>
      <a-step status="finish" title="로그인">
        <a-icon slot="icon" type="user" />
      </a-step>
      <a-step status="finish" title="본인인증">
        <a-icon slot="icon" type="solution" />
      </a-step>
      <a-step status="process" title="결제">
        <a-icon slot="icon" type="loading" />
      </a-step>
      <a-step status="wait" title="완료">
        <a-icon slot="icon" type="smile-o" />
      </a-step>
    </a-steps>

    <a-divider orientation="left">
      Cards
    </a-divider>

    <a-row :gutter="16">
      <a-col :span="8">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://ssl.pstatic.net/melona/libs/1453/1453548/9a94a062df031e1c9e8c_20230612111211149.png"
          />
          <a-card-meta title="콘텐츠검색광고 이해하기">
            <template slot="description">
              블로그/카페 마케팅 고민?<br/>콘텐츠검색광고로 해결!
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://ssl.pstatic.net/melona/libs/1453/1453297/f4a469db6209a7b38085_20230608105549404.png"
          />
          <a-card-meta title="무료 온라인 스터디 모집">
            <template slot="description">
              다함께 프로그래밍 시작<br/>6주동안 파이썬 배우기
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <img
            slot="cover"
            alt="example"
            src="https://ssl.pstatic.net/melona/libs/1453/1453281/39697121f6508499fc1e_20230608101521427.png"
          />
          <a-card-meta title="선거·정당 자료 공개구입">
            <template slot="description">
              23-06-19 ~ 23-06-26<br/>지금 확인하러 가기
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>

    <a-divider orientation="left">
      Collapse
    </a-divider>

    <a-collapse accordion v-model="activeKey">
      <a-collapse-panel key="1" header="관련 법률 - ①">
        <p>법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="관련 법률 - ②" :disabled="false">
        <p>재판의 심리와 판결은 공개한다. 다만, 심리는 국가의 안전보장 또는 안녕질서를 방해하거나 선량한 풍속을 해할 염려가 있을 때에는 법원의 결정으로 공개하지 아니할 수 있다.</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="관련 법률 - ③">
        <p>군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.</p>
      </a-collapse-panel>
    </a-collapse>

  </div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {
      activeKey: ['1'],
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.ant-steps {
  padding: 0 24px;
}
.ant-row {
  padding: 0 24px;
  margin-top: 1rem;
}
</style>