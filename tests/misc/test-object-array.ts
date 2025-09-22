function test() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  for (const user of users) {
    user.id; // What type is this?
    user.name; // And this?
  }
}