import type { IUsersResponse } from '$lib/interfaces/ApiResponses';
import fetchUser from '$lib/utils/fetchUser';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  searchUser: async ({ request, cookies }) => {

    const data = await request.formData();
    const nickname = data.get('nickname');

    if (nickname) {
      throw redirect(307, `/?nickname=${nickname}`)
    } else {
      return { success: false }
    }
  }
};

import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async ({ params, url }) => {
  const nickname = url.searchParams.get("nickname")
  if(nickname){
    const user = await fetchUser(nickname)
    return {
      user: user
    }
  }
}