import type { IUsersResponse } from '$lib/interfaces/ApiResponses';
import { fetchUser } from '$lib/utils/fetches';
import type { Actions } from './$types';

export const actions: Actions = {
  searchUser: async ({ request, cookies }) => {

    const data = await request.formData();
    const nickname = data.get('nickname');

    console.log(nickname)
    if (nickname) {
      const user = await fetchUser((nickname as string))
      console.log(user)
      return { success: true };
    } else {
      return { success: false }
    }
  }
};