import request from 'superagent';

const URL = 'https://infinite-eyrie-70586.herokuapp.com';

export async function signUp(user) {
  const response = await request
    .post(URL + '/api/auth/signup')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) {
    throw response.body;
  }
  
  return response.body;
}

export async function signIn(user) {
  const response = await request
    .post(URL + '/api/auth/signin')
    .ok(res => res.status < 500)
    .send(user);

  if (response.status === 400) {
    throw response.body;
  }
  
  return response.body;
}

export async function getMyTodos() {
  const response = await request
    .get(URL + '/api/me/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function addTodo(todo) {
  const response = await request 
    .post(URL + '/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function getSharedTodos() {
  const response = await request 
    .get(URL + '/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function completeTodo(todo) {
  const response = await request 
    .put(URL + `/api/todos/${todo.id}/completed`)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function shareTodo(todo) {
  const response = await request 
    .put(URL + `/api/todos/${todo.id}/shared`)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function deleteTodo(id) {
  const response = await request 
    .delete(URL + `/api/todos/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  
  return response.body;
}