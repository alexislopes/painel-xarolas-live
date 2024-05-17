
import type { AsyncDataOptions } from '#app';
import type { FetchOptions } from 'ofetch';

// locals
import FetchFactory from '../factory';

type IUser = {
  id: number;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  created_at: string
}

type IResponse = {
  data: IUser[];
}

class UsersModule extends FetchFactory<IResponse[]> {
  private RESOURCE = '/users';

  /**
   * Return the user info 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getUserInfo(
    asyncDataOptions?: AsyncDataOptions<IResponse[]>
  ) {

    const config = useRuntimeConfig()

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {
          headers: {
            'Authorization': `Bearer ${config.public.authorization}`,
            'Client-Id': config.public.client_id
          }
        };
        return this.call(
          'GET',
          `${this.RESOURCE}?login=xarola_`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default UsersModule;