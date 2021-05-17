import request from 'superagent';

export async function getMyTodos() {
  const response = await request.get('/api/me/todos');
  return response.body;
}

export async function signUp(user) {
  const response = await request
    .post('/api/auth/signup')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

export async function signIn(user) {
  const response = await request
    .post('/api/auth/signin')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) {
    throw response.body;
  }
  return response.body;
}

