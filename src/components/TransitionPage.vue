<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    :enter-active-class="transitionEnterActiveClass"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
    appear
  >
    <slot/>
  </transition>
</template>

<script>
const DEFAULT_TRANSITION = 'fadee';
const DEFAULT_TRANSITION_MODE = 'out-in';

export default {
  name: 'TransitionPage',
  data() {
    return {
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: '',
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName || DEFAULT_TRANSITION;

      if (transitionName === 'slidee') {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        transitionName = toDepth < fromDepth ? 'slidee-right' : 'slidee-left';
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === 'zoom') {
        this.transitionMode = 'in-out';
        this.transitionEnterActiveClass = 'zoom-enter-active';
        document.body.style.overflow = 'hidden';
      }

      if (from.meta.transitionName === 'zoom') {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      next();
    });
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
};
</script>

<style lang="scss">
.fadee-enter-active,
.fadee-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}
.fadee-enter,
.fadee-leave-active {
  opacity: 0;
}

.slidee-left-enter-active,
.slidee-left-leave-active,
.slidee-right-enter-active,
.slidee-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
.slidee-left-enter,
.slidee-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}
.slidee-left-leave-active,
.slidee-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.zoom-enter-active,
.zoom-leave-active {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: zoom;
}
.zoom-leave-active {
  animation-direction: reverse;
}
@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  100% {
    opacity: 1;
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}
.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}
.slither-enter-to, .slither-leave {
  transform: translateX(0);
}

.drain-enter-active, .drain-leave-active {
  transition: transform 1s;
}
.drain-enter, .drain-leave-to {
  transform: translateY(100%);
}
.drain-enter-to, .drain-leave {
  transform: translateY(0);
}
</style>