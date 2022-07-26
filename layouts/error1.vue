<template>
  <error-page v-bind="error" />
</template>

<script>
import ErrorPage from '@core/pages/error.vue';

export default {
  name: 'nuxt-error-layout',
  components: {
    ErrorPage,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  layout: 'none',
};
</script>
