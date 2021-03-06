import request from 'superagent';

export async function signUp(credentials) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
}

export async function signIn(credentials) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(credentials);

  if (response.status === 400) {
    throw response.body;
  }

  return response.body;
}

// export async function getPlaylists(search) {
//   const response = await request
//     .get('/api/playlists')
//     .query({ search: search })
//     .set('Authorization', window.localStorage.getItem('TOKEN'));

//   return response.body;
// }

export async function getPlaylist(id) {
  const response = await request
    .get(`/api/playlist/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function getMyFavorites() {
  const response = await request
    .get('/api/me/favorites')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function addFavorite(favorite) {
  const response = await request
    .post('/api/favorites')
    .send(favorite)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function addMixtape(mixtape) {
  const response = await request
    .post('/api/mixtape')
    .send(mixtape)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function getMixtapeById(id) {
  const response = await request
    .get(`/api/mixtape/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function getMixtapesByUserId(userId) {
  console.log(userId);
  const response = await request
    .get(`/api/mixtape/user/${userId}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));
    
  return response.body;
}

export async function getAllMixtapes() {
  const response = await request
    .get('/api/mixtapes/all')
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  console.log(response.body);

  return response.body;
}

export async function deleteFavorite(id) {
  const response = await request
    .delete(`/api/favorites/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function getMixtapeItemsById(id) {
  const response = await request
    .get(`/api/playlistItems/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  console.log(response);
  return response.body;
}
