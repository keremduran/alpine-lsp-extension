function xdata1_Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  "expr_9_17_START";
                 ({
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    });
  "expr_9_17_END";

  "expr_77_20_START";
                    `Welcome to ${stats.totalUsers} users platform`;
  "expr_77_20_END";

  "expr_78_19_START";
                   isLoading;
  "expr_78_19_END";

  "expr_79_19_START";
                   !isLoading && searchQuery.length > 0;
  "expr_79_19_END";

  "expr_79_65_START";
                                                                 `Searching for: ${searchQuery}`;
  "expr_79_65_END";

  "expr_82_24_START";
                        searchQuery;
  "expr_82_24_END";

  "expr_83_25_START";
                         filters.category;
  "expr_83_25_END";

  "expr_143_19_START";
                   `Total posts: ${users.flatMap(u => u.posts).length}`;
  "expr_143_19_END";

  "expr_144_19_START";
                   `Active users: ${users.filter(u => u.isActive).length}`;
  "expr_144_19_END";

  "expr_145_19_START";
                   `Average age: ${(users.reduce((sum, u) => sum + u.age, 0) / users.length).toFixed(1)}`;
  "expr_145_19_END";

  "expr_148_21_START";
                     users.some(u => u.isActive);
  "expr_148_21_END";

  "expr_156_56_START";
                                                        isLoading ? 'Stop Loading' : 'Start Loading';
  "expr_156_56_END";

  "expr_157_41_START";
                                         `Clicked ${count} times`;
  "expr_157_41_END";

  "expr_167_19_START";
                   users[0]?.profile?.preferences?.theme || 'unknown';
  "expr_167_19_END";

  "expr_170_19_START";
                   users.length > 0 ?
                   `Found ${users.length} users` :
                   'No users found';
  "expr_170_19_END";

  "expr_175_19_START";
                   `${users.filter(u => u.isActive).length}/${users.length} users are active`;
  "expr_175_19_END";

  "expr_178_21_START";
                     getUsersByCategory('tech').length > 0;
  "expr_178_21_END";

  "expr_208_19_START";
                   `Total likes: ${users.flatMap(u => u.posts).reduce((sum, p) => sum + p.likes, 0)}`;
  "expr_208_19_END";

  "expr_221_19_START";
                   users.every(u => u.age > 18);
  "expr_221_19_END";

  "expr_221_57_START";
                                                         'All users are adults';
  "expr_221_57_END";

  "expr_222_19_START";
                   users.some(u => u.posts.length === 0);
  "expr_222_19_END";

  "expr_222_66_START";
                                                                  'Some users have no posts';
  "expr_222_66_END";

}

function xdata1_cat_of_categories__cat_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const cat of categories) {
    "expr_85_27_START";
    // x-for: cat of categories
    "expr_85_27_item_START";
                           cat;
    "expr_85_27_item_END";
    "expr_85_27_items_START";
                                  categories;
    "expr_85_27_items_END";
    "expr_85_27_END";

  }
}

function xdata1_cat_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const cat of categories) {
    "expr_85_67_START";
                                                                   cat;
    "expr_85_67_END";

  }
}

function xdata1_category_of_categories__category_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const category of categories) {
    "expr_91_29_START";
    // x-for: category of categories
    "expr_91_29_item_START";
                             category;
    "expr_91_29_item_END";
    "expr_91_29_items_START";
                                         categories;
    "expr_91_29_items_END";
    "expr_91_29_END";

  }
}

function xdata1_category_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const category of categories) {
    "expr_92_28_START";
                            category.toUpperCase();
    "expr_92_28_END";

  }
}

function xdata1_category_index_of_categories__category_index_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  categories.forEach((category, index) => {
    "expr_99_29_START";
    // x-for: category of categories
    "expr_99_29_item_START";
                              category;
    "expr_99_29_item_END";
    "expr_99_29_items_START";
                                                  categories;
    "expr_99_29_items_END";
    "expr_99_29_END";

  });
}

function xdata1_category_index_of_categoriesExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  categories.forEach((category, index) => {
    "expr_100_28_START";
                            `${index + 1}. ${category}`;
    "expr_100_28_END";

  });
}

function xdata1_user_userIndex_of_users__user_userIndex_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
    "expr_107_29_START";
    // x-for: user of users
    "expr_107_29_item_START";
                              user;
    "expr_107_29_item_END";
    "expr_107_29_items_START";
                                                  users;
    "expr_107_29_items_END";
    "expr_107_29_END";

  });
}

function xdata1_user_userIndex_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
    "expr_109_32_START";
                                `User #${userIndex + 1}: ${user.name}`;
    "expr_109_32_END";

    "expr_110_31_START";
                               `Age: ${user.age}, Active: ${user.isActive ? 'Yes' : 'No'}`;
    "expr_110_31_END";

    "expr_111_31_START";
                               `Email: ${user.profile.email}`;
    "expr_111_31_END";

    "expr_112_31_START";
                               `Theme: ${user.profile.preferences.theme}`;
    "expr_112_31_END";

  });
}

function xdata1_user_userIndex_of_users__post_postIndex_of_user_posts__post_postIndex_of_user_postsExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.posts.forEach((post, postIndex) => {
      "expr_116_37_START";
      // x-for: post of user.posts
      "expr_116_37_item_START";
                                      post;
      "expr_116_37_item_END";
      "expr_116_37_items_START";
                                                          user.posts;
      "expr_116_37_items_END";
      "expr_116_37_END";

    });
  });
}

function xdata1_user_userIndex_of_users__post_postIndex_of_user_postsExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.posts.forEach((post, postIndex) => {
      "expr_118_40_START";
                                        `Post ${postIndex + 1}: ${post.title}`;
      "expr_118_40_END";

      "expr_119_39_START";
                                       `Likes: ${post.likes}`;
      "expr_119_39_END";

      "expr_120_39_START";
                                       post.likes > 100;
      "expr_120_39_END";

      "expr_120_65_START";
                                                                 '🔥 Popular post!';
      "expr_120_65_END";

    });
  });
}

function xdata1_user_userIndex_of_users__post_postIndex_of_user_posts__tag_of_post_tags__tag_of_post_tagsExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.posts.forEach((post, postIndex) => {
  for (const tag of post.tags) {
        "expr_125_49_START";
        // x-for: tag of post.tags
        "expr_125_49_item_START";
                                                 tag;
        "expr_125_49_item_END";
        "expr_125_49_items_START";
                                                        post.tags;
        "expr_125_49_items_END";
        "expr_125_49_END";

      }
    });
  });
}

function xdata1_user_userIndex_of_users__post_postIndex_of_user_posts__tag_of_post_tagsExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.posts.forEach((post, postIndex) => {
  for (const tag of post.tags) {
        "expr_126_50_START";
                                                  `#${tag}`;
        "expr_126_50_END";

      }
    });
  });
}

function xdata1_user_userIndex_of_users__follower_followerIndex_of_user_followers__follower_followerIndex_of_user_followersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.followers.forEach((follower, followerIndex) => {
      "expr_134_37_START";
      // x-for: follower of user.followers
      "expr_134_37_item_START";
                                      follower;
      "expr_134_37_item_END";
      "expr_134_37_items_START";
                                                                  user.followers;
      "expr_134_37_items_END";
      "expr_134_37_END";

    });
  });
}

function xdata1_user_userIndex_of_users__follower_followerIndex_of_user_followersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((user, userIndex) => {
  user.followers.forEach((follower, followerIndex) => {
      "expr_135_38_START";
                                      `${follower}${followerIndex < user.followers.length - 1 ? ', ' : ''}`;
      "expr_135_38_END";

    });
  });
}

function xdata1_user_of_users_filter_u____u_isActive___user_of_users_filter_u____u_isActive_Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users.filter(u => u.isActive)) {
    "expr_150_29_START";
    // x-for: user of users.filter(u => u.isActive)
    "expr_150_29_item_START";
                             user;
    "expr_150_29_item_END";
    "expr_150_29_items_START";
                                     users.filter(u => u.isActive);
    "expr_150_29_items_END";
    "expr_150_29_END";

  }
}

function xdata1_user_of_users_filter_u____u_isActive_Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users.filter(u => u.isActive)) {
    "expr_151_27_START";
                           user.name;
    "expr_151_27_END";

  }
}

function xdata1_user_of_getUsersByCategory__tech__Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of getUsersByCategory('tech')) {
    "expr_151_27_START";
                           user.name;
    "expr_151_27_END";

  }
}

function xdata1_item_of_____item_of___Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const item of []) {
    "expr_162_25_START";
    // x-for: item of []
    "expr_162_25_item_START";
                         item;
    "expr_162_25_item_END";
    "expr_162_25_items_START";
                                 [];
    "expr_162_25_items_END";
    "expr_162_25_END";

  }
}

function xdata1_item_of___Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const item of []) {
    "expr_163_23_START";
                       item;
    "expr_163_23_END";

  }
}

function xdata1_user_of_getUsersByCategory__tech____user_of_getUsersByCategory__tech__Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of getUsersByCategory('tech')) {
    "expr_180_29_START";
    // x-for: user of getUsersByCategory('tech')
    "expr_180_29_item_START";
                             user;
    "expr_180_29_item_END";
    "expr_180_29_items_START";
                                     getUsersByCategory('tech');
    "expr_180_29_items_END";
    "expr_180_29_END";

  }
}

function xdata1_post_of_getPopularPosts____post_of_getPopularPosts__Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const post of getPopularPosts()) {
    "expr_187_25_START";
    // x-for: post of getPopularPosts()
    "expr_187_25_item_START";
                         post;
    "expr_187_25_item_END";
    "expr_187_25_items_START";
                                 getPopularPosts();
    "expr_187_25_items_END";
    "expr_187_25_END";

  }
}

function xdata1_post_of_getPopularPosts__Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const post of getPopularPosts()) {
    "expr_189_27_START";
                           post.title;
    "expr_189_27_END";

    "expr_190_27_START";
                           `${post.likes} likes`;
    "expr_190_27_END";

  }
}

function xdata1_user_of_users_filter_u____u_posts_length___1___user_of_users_filter_u____u_posts_length___1_Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users.filter(u => u.posts.length > 1)) {
    "expr_196_25_START";
    // x-for: user of users.filter(u => u.posts.length > 1)
    "expr_196_25_item_START";
                         user;
    "expr_196_25_item_END";
    "expr_196_25_items_START";
                                 users.filter(u => u.posts.length > 1);
    "expr_196_25_items_END";
    "expr_196_25_END";

  }
}

function xdata1_user_of_users_filter_u____u_posts_length___1_Expressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users.filter(u => u.posts.length > 1)) {
    "expr_197_23_START";
                       `${user.name} has ${user.posts.length} posts`;
    "expr_197_23_END";

  }
}

function xdata1_user_of_users__user_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users) {
    "expr_201_25_START";
    // x-for: user of users
    "expr_201_25_item_START";
                         user;
    "expr_201_25_item_END";
    "expr_201_25_items_START";
                                 users;
    "expr_201_25_items_END";
    "expr_201_25_END";

    "expr_201_25_START";
    // x-for: user of users
    "expr_201_25_item_START";
                         user;
    "expr_201_25_item_END";
    "expr_201_25_items_START";
                                 users;
    "expr_201_25_items_END";
    "expr_201_25_END";

    "expr_201_25_START";
    // x-for: user of users
    "expr_201_25_item_START";
                         user;
    "expr_201_25_item_END";
    "expr_201_25_items_START";
                                 users;
    "expr_201_25_items_END";
    "expr_201_25_END";

  }
}

function xdata1_user_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user of users) {
    "expr_203_27_START";
                           user.profile.settings.notifications ? 'Notifications ON' : 'Notifications OFF';
    "expr_203_27_END";

    "expr_212_23_START";
                       user.name.split(' ').map(n => n[0]).join('.');
    "expr_212_23_END";

    "expr_217_23_START";
                       user['profile']['email'];
    "expr_217_23_END";

  }
}

function xdata1_userWithLongVariableName_veryLongIndexName_of_users__userWithLongVariableName_veryLongIndexName_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((userWithLongVariableName, veryLongIndexName) => {
    "expr_225_25_START";
    // x-for: userWithLongVariableName of users
    "expr_225_25_item_START";
                          userWithLongVariableName;
    "expr_225_25_item_END";
    "expr_225_25_items_START";
                                                                          users;
    "expr_225_25_items_END";
    "expr_225_25_END";

  });
}

function xdata1_userWithLongVariableName_veryLongIndexName_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  users.forEach((userWithLongVariableName, veryLongIndexName) => {
    "expr_226_23_START";
                       `${veryLongIndexName}: ${userWithLongVariableName.name}`;
    "expr_226_23_END";

  });
}

function xdata1_user_item_of_users__user_item_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user_item of users) {
    "expr_230_25_START";
    // x-for: user_item of users
    "expr_230_25_item_START";
                         user_item;
    "expr_230_25_item_END";
    "expr_230_25_items_START";
                                      users;
    "expr_230_25_items_END";
    "expr_230_25_END";

  }
}

function xdata1_user_item_of_usersExpressions() {
  const data = {
        // Complex nested data structures
        users: [
            {
                id: 1,
                name: 'Alice Smith',
                age: 28,
                isActive: true,
                profile: {
                    email: 'alice@example.com',
                    preferences: { theme: 'dark', lang: 'en' },
                    settings: { notifications: true }
                },
                posts: [
                    { id: 101, title: 'Hello World', likes: 42, tags: ['intro', 'welcome'] },
                    { id: 102, title: 'Alpine.js Tips', likes: 128, tags: ['js', 'alpine', 'tips'] }
                ],
                followers: ['bob', 'charlie', 'diana']
            },
            {
                id: 2,
                name: 'Bob Johnson',
                age: 34,
                isActive: false,
                profile: {
                    email: 'bob@example.com',
                    preferences: { theme: 'light', lang: 'es' },
                    settings: { notifications: false }
                },
                posts: [
                    { id: 201, title: 'Vue vs Alpine', likes: 89, tags: ['vue', 'alpine', 'comparison'] }
                ],
                followers: ['alice', 'eve']
            }
        ],

        // Arrays and objects
        categories: ['tech', 'lifestyle', 'education'],
        stats: { totalUsers: 2, activeUsers: 1, totalPosts: 3 },
        filters: { minLikes: 50, category: null, isActive: null },

        // Primitives and edge cases
        searchQuery: '',
        isLoading: false,
        selectedUser: null,
        count: 0,

        // Functions with complex logic
        getUsersByCategory(category) {
            return this.users.filter(user =>
                user.posts.some(post => post.tags.includes(category))
            );
        },

        getPopularPosts() {
            return this.users
                .flatMap(user => user.posts)
                .filter(post => post.likes > this.filters.minLikes)
                .sort((a, b) => b.likes - a.likes);
        },

        toggleUserStatus(userId) {
            const user = this.users.find(u => u.id === userId);
            if (user) user.isActive = !user.isActive;
        }
    };
  let { users, categories, stats, filters, searchQuery, isLoading, selectedUser, count, getUsersByCategory, getPopularPosts, toggleUserStatus } = data;
  for (const user_item of users) {
    "expr_231_23_START";
                       user_item.name;
    "expr_231_23_END";

  }
}

function xdata2_Expressions() {
  const data = { simpleCounter: 0, items: ['apple', 'banana', 'cherry'] };
  let { simpleCounter, items } = data;
  "expr_237_17_START";
                 ({ simpleCounter: 0, items: ['apple', 'banana', 'cherry'] });
  "expr_237_17_END";

  "expr_239_49_START";
                                                 `Count: ${simpleCounter}`;
  "expr_239_49_END";

}

function xdata2_fruit_i_of_items__fruit_i_of_itemsExpressions() {
  const data = { simpleCounter: 0, items: ['apple', 'banana', 'cherry'] };
  let { simpleCounter, items } = data;
  items.forEach((fruit, i) => {
    "expr_240_25_START";
    // x-for: fruit of items
    "expr_240_25_item_START";
                          fruit;
    "expr_240_25_item_END";
    "expr_240_25_items_START";
                                       items;
    "expr_240_25_items_END";
    "expr_240_25_END";

  });
}

function xdata2_fruit_i_of_itemsExpressions() {
  const data = { simpleCounter: 0, items: ['apple', 'banana', 'cherry'] };
  let { simpleCounter, items } = data;
  items.forEach((fruit, i) => {
    "expr_241_23_START";
                       `${i + 1}. ${fruit}`;
    "expr_241_23_END";

  });
}

function xdata3_Expressions() {
  const data = {};
  "expr_246_17_START";
                 ({});
  "expr_246_17_END";

  "expr_247_19_START";
                   'Empty data component';
  "expr_247_19_END";

}

function xdata4_Expressions() {
  const data = (() => ({ message: 'From function', getValue: () => 42 }))();
  let { message, getValue } = data;
  "expr_251_17_START";
                 () => ({ message: 'From function', getValue: () => 42 });
  "expr_251_17_END";

  "expr_252_19_START";
                   message;
  "expr_252_19_END";

  "expr_253_19_START";
                   `Value: ${getValue()}`;
  "expr_253_19_END";

}
