// [File]: plugins/api.ts

// 3rd's
import { $fetch, type FetchOptions } from 'ofetch';

// locals
import AuthModule from '~/repository/modules/auth';
import StreamsModule from '~/repository/modules/streams';
import UsersModule from '~/repository/modules/users';
import VideosModule from '~/repository/modules/videos';

interface IApiInstance {
  streams: StreamsModule;
  users: UsersModule;
  videos: VideosModule;
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.twitch_base_url
  };

  const authFetchOptions: FetchOptions = {
    baseURL: config.public.auth_twitch_base_url
  }

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);
  const authApiFecther = $fetch.create(authFetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    streams: new StreamsModule(apiFecther),
    users: new UsersModule(apiFecther),
    videos: new VideosModule(apiFecther),
    auth: new AuthModule(authApiFecther)
  };

  return {
    provide: {
      twitch: modules
    }
  };
});