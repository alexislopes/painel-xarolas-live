
import type { AsyncDataOptions } from '#app';
import { $fetch, type FetchOptions } from 'ofetch';

// locals
import FetchFactory from '../factory';

import AuthModule from './auth';



type IStream = {
  id: number;
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  type: string;
  title: string;
  tags: string[];
  viwer_count: number;
  started_at: string;
  thumbnail_url: string;
  is_mature: boolean;
}

type IPagination = {
  cursor: string
}

type IResponse = {
  data: IStream[];
  pagination: IPagination
}

class StreamsModule extends FetchFactory<IResponse[]> {
  private RESOURCE = '/streams';

  /**
   * Return the streams as array  
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getStreamInfo(
    asyncDataOptions?: AsyncDataOptions<IResponse[]>
  ) {

    const config = useRuntimeConfig()

    const { data } = await new AuthModule($fetch.create({ baseURL: config.public.auth_twitch_base_url })).getToken()


    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Authorization': `Bearer ${data.value?.access_token}`,
            'Client-Id': config.public.client_id
          }
        };
        return this.call(
          'GET',
          `${this.RESOURCE}?user_id=${config.public.user_id}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default StreamsModule;