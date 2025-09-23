function xdata1_Expressions() {
  const data = { user: {name: 'Hello', age: 92}, items: ['Apple', 'Banana', 'Orange'] };
  let { user, items } = data;
  "expr_10_17_START";
                 ({ user: {name: 'Hello', age: 92}, items: ['Apple', 'Banana', 'Orange'] });
  "expr_10_17_END";

  "expr_11_21_START";
                     user.name;
  "expr_11_21_END";

  "expr_12_21_START";
                     user.age;
  "expr_12_21_END";

  "expr_13_21_START";
                     items;
  "expr_13_21_END";

}

function xdata1_user_of_usersExpressions() {
  const data = { user: {name: 'Hello', age: 92}, items: ['Apple', 'Banana', 'Orange'] };
  let { user, items } = data;
  for (const user of users) {
    "expr_11_21_START";
                     user.name;
    "expr_11_21_END";

  }
}

function xdata1_item_of_items__item_of_itemsExpressions() {
  const data = { user: {name: 'Hello', age: 92}, items: ['Apple', 'Banana', 'Orange'] };
  let { user, items } = data;
  for (const item of items) {
    "expr_14_25_START";
    // x-for: item of items
    "expr_14_25_item_START";
                         item;
    "expr_14_25_item_END";
    "expr_14_25_items_START";
                                 items;
    "expr_14_25_items_END";
    "expr_14_25_END";

  }
}

function xdata1_item_of_itemsExpressions() {
  const data = { user: {name: 'Hello', age: 92}, items: ['Apple', 'Banana', 'Orange'] };
  let { user, items } = data;
  for (const item of items) {
    "expr_15_25_START";
                         item;
    "expr_15_25_END";

  }
}

function xdata2_Expressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  "expr_20_17_START";
                 ({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
  "expr_20_17_END";

}

function xdata2_user_of_users__user_of_usersExpressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  for (const user of users) {
    "expr_21_25_START";
    // x-for: user of users
    "expr_21_25_item_START";
                         user;
    "expr_21_25_item_END";
    "expr_21_25_items_START";
                                 users;
    "expr_21_25_items_END";
    "expr_21_25_END";

  }
}


function xdata2_user_of_usersExpressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  for (
    // EXPRESSION START
    const user of users
    // EXPRESSION END
  ) {
    "expr_24_30_START";
                              user.id;
    "expr_24_30_END";

  }
}