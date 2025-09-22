function xdata1_Expressions() {
  const data = { items: ['Apple', 'Banana', 'Orange'] };
  let { items } = data;
  "expr_10_17_START";
                 ({ items: ['Apple', 'Banana', 'Orange'] });
  "expr_10_17_END";

  "expr_11_21_START";
                     items;
  "expr_11_21_END";

}

function xdata1_item_of_items__item_of_itemsExpressions() {
  const data = { items: ['Apple', 'Banana', 'Orange'] };
  let { items } = data;
  for (const item of items) {
    "expr_13_25_START";
    // x-for: item of items
    "expr_13_25_item_START";
                         item;
    "expr_13_25_item_END";
    "expr_13_25_items_START";
                                 items;
    "expr_13_25_items_END";
    "expr_13_25_END";

  }
}

function xdata1_item_of_itemsExpressions() {
  const data = { items: ['Apple', 'Banana', 'Orange'] };
  let { items } = data;
  for (const item of items) {
    "expr_14_25_START";
                         item;
    "expr_14_25_END";

  }
}

function xdata2_Expressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  "expr_19_17_START";
                 ({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
  "expr_19_17_END";

}

function xdata2_user_of_users__user_of_usersExpressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  for (const user of users) {
    "expr_20_25_START";
    // x-for: user of users
    "expr_20_25_item_START";
                         user;
    "expr_20_25_item_END";
    "expr_20_25_items_START";
                                 users;
    "expr_20_25_items_END";
    "expr_20_25_END";

  }
}

function xdata2_user_of_usersExpressions() {
  const data = { users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] };
  let { users } = data;
  for (const user of users) {
    "expr_22_30_START";
                              user.name;
    "expr_22_30_END";

    "expr_23_30_START";
                              user.id;
    "expr_23_30_END";

  }
}