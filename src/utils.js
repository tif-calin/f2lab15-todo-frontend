import request from 'superagent';

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

export async function getMyTodos() {
  const response = await request
    .get('/api/me/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function addTodo(todo) {
  const response = await request 
    .post('/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function getSharedTodos() {
  const response = await request 
    .get('/api/todos')
    .set('Authorization', window.localStorage.getItem('TOKEN'));

  return response.body;
}

export async function completeTodo(todo) {
  const response = await request 
    .put(`/api/todos/${todo.id}/completed`)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function shareTodo(todo) {
  const response = await request 
    .put(`/api/todos/${todo.id}/shared`)
    .set('Authorization', window.localStorage.getItem('TOKEN'))
    .send(todo);

  return response.body;
}

export async function deleteTodo(id) {
  const response = await request 
    .delete(`/api/todos/${id}`)
    .set('Authorization', window.localStorage.getItem('TOKEN'));
  
  return response.body;
}