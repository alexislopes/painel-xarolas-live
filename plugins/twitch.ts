// [File]: plugins/api.ts

// 3rd's
import { $fetch, type FetchOptions } from 'ofetch';

// locals
import StreamsModule from '~/repository/modules/streams';
import UsersModule from '~/repository/modules/users';
import VideosModule from '~/repository/modules/videos';

interface IApiInstance {
  streams: StreamsModule;
  users: UsersModule;
  videos: VideosModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.twitch_base_url
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    streams: new StreamsModule(apiFecther),
    users: new UsersModule(apiFecther),
    videos: new VideosModule(apiFecther)
  };

  return {
    provide: {
      twitch: modules
    }
  };
});