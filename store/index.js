import {
  serverInit,
} from '@core/store/init';

export const actions = {
  async nuxtServerInit(ctx) {
    await serverInit.call(this, ctx);
  },
};
