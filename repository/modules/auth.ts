
import type { AsyncDataOptions } from '#app';
import type { FetchOptions } from 'ofetch';

// locals
import FetchFactory from '../factory';

interface Auth {
  access_token: string
  expiries_in: number
  token_type: string
}

class AuthModule extends FetchFactory<Auth> {
  private RESOURCE = '/oauth2/token';

  /**
   * Returns access token for authenticated user 
   * @param asyncDataOptions options for `useAsyncData`
   * @returns 
   */
  async getToken(
    asyncDataOptions?: AsyncDataOptions<Auth>
  ) {

    const config = useRuntimeConfig()

    return useAsyncData(
      () => {
        const fetchOptions: FetchOptions<'json'> = {};
        return this.call(
          'POST',
          `${this.RESOURCE}?client_id=${config.public.client_id}&client_secret=${config.public.client_secret}&grant_type=${config.public.grant_type}`,
          undefined, // body
          fetchOptions
        )
      },
      asyncDataOptions
    )
  }
}

export default AuthModule;