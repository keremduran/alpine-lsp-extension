"use strict";
function expr_3_17() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_3_17_START";
    const expr_3_17 = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    "expr_3_17_END";
}
function expr_38_24() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_38_24_START";
    const expr_38_24 = `Welcome, ${user.name}`;
    "expr_38_24_END";
}
function expr_39_25() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_39_25_START";
    const expr_39_25 = user.isAdmin;
    "expr_39_25_END";
}
function expr_39_25_2() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_39_25_2_START";
        const expr_39_25_2 = user.isAdmin;
        "expr_39_25_2_END";
    });
}
function expr_40_30() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_40_30_START";
    const expr_40_30 = 'Admin Panel';
    "expr_40_30_END";
}
function expr_42_23() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_42_23_START";
    const expr_42_23 = user.preferences.theme;
    "expr_42_23_END";
}
function expr_46_36() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_46_36_START";
    const expr_46_36 = searchTerm;
    "expr_46_36_END";
}
function expr_47_19() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_47_19_START";
    const expr_47_19 = searchTerm.length > 0;
    "expr_47_19_END";
}
function expr_47_50() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_47_50_START";
    const expr_47_50 = `Searching for: ${searchTerm}`;
    "expr_47_50_END";
}
function expr_50_21() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_50_21_START";
    const expr_50_21 = isLoading;
    "expr_50_21_END";
}
function expr_51_26() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_51_26_START";
    const expr_51_26 = 'Loading...';
    "expr_51_26_END";
}
function expr_56_29() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_56_29_START";
        products.forEach((product, productIndex) => {
            // x-for: product of products
            const expr_56_29_item = "product";
            const expr_56_29_items = products;
        });
        "expr_56_29_END";
    });
}
function expr_58_32() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_58_32_START";
        const expr_58_32 = product.name;
        "expr_58_32_END";
    });
}
function expr_59_31() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_59_31_START";
        const expr_59_31 = `$${product.price}`;
        "expr_59_31_END";
    });
}
function expr_60_31() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_60_31_START";
        const expr_60_31 = `Product #${productIndex + 1}`;
        "expr_60_31_END";
    });
}
function expr_63_33() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_63_33_START";
        const expr_63_33 = product.price > 500;
        "expr_63_33_END";
    });
}
function expr_64_38() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_64_38_START";
        const expr_64_38 = 'Premium Product';
        "expr_64_38_END";
    });
}
function expr_69_41() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        for (const tag of product.tags) {
            "expr_69_41_START";
            products.forEach((product, productIndex) => {
                for (const tag of product.tags) {
                    // x-for: tag of product.tags
                    const expr_69_41_item = "tag";
                    const expr_69_41_items = product.tags;
                }
            });
            "expr_69_41_END";
        }
    });
}
function expr_70_42() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        for (const tag of product.tags) {
            "expr_70_42_START";
            const expr_70_42 = tag;
            "expr_70_42_END";
        }
    });
}
function expr_76_36() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_76_36_START";
        const expr_76_36 = `Reviews (${product.reviews.length})`;
        "expr_76_36_END";
    });
}
function expr_77_41() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        product.reviews.forEach((review, reviewIndex) => {
            "expr_77_41_START";
            products.forEach((product, productIndex) => {
                product.reviews.forEach((review, reviewIndex) => {
                    // x-for: review of product.reviews
                    const expr_77_41_item = "review";
                    const expr_77_41_items = product.reviews;
                });
            });
            "expr_77_41_END";
        });
    });
}
function expr_79_43() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        product.reviews.forEach((review, reviewIndex) => {
            "expr_79_43_START";
            const expr_79_43 = `Review ${reviewIndex + 1}: ${review.comment}`;
            "expr_79_43_END";
        });
    });
}
function expr_80_46() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        product.reviews.forEach((review, reviewIndex) => {
            "expr_80_46_START";
            const expr_80_46 = '★'.repeat(review.rating);
            "expr_80_46_END";
        });
    });
}
function expr_81_47() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        product.reviews.forEach((review, reviewIndex) => {
            "expr_81_47_START";
            const expr_81_47 = `by ${user.name} on product ${product.name}`;
            "expr_81_47_END";
        });
    });
}
function expr_87_64() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_87_64_START";
        const expr_87_64 = 'Add to Cart';
        "expr_87_64_END";
    });
}
function expr_90_36() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_90_36_START";
        const expr_90_36 = 'Apply Discount';
        "expr_90_36_END";
    });
}
function expr_96_34() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_96_34_START";
    const expr_96_34 = cart.length > 0;
    "expr_96_34_END";
}
function expr_96_34_2() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_96_34_2_START";
    const expr_96_34_2 = cart.length > 0;
    "expr_96_34_2_END";
}
function expr_97_24() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_97_24_START";
    const expr_97_24 = `Cart (${cart.length} items)`;
    "expr_97_24_END";
}
function expr_98_29() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    cart.forEach((cartItem, cartIndex) => {
        "expr_98_29_START";
        // x-for: cartItem of cart
        const expr_98_29_item = "cartItem";
        const expr_98_29_items = cart;
        "expr_98_29_END";
    });
}
function expr_100_34() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    cart.forEach((cartItem, cartIndex) => {
        "expr_100_34_START";
        const expr_100_34 = cartItem.name;
        "expr_100_34_END";
    });
}
function expr_101_34() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    cart.forEach((cartItem, cartIndex) => {
        "expr_101_34_START";
        const expr_101_34 = `$${cartItem.price}`;
        "expr_101_34_END";
    });
}
function expr_102_71() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    cart.forEach((cartItem, cartIndex) => {
        "expr_102_71_START";
        const expr_102_71 = 'Remove';
        "expr_102_71_END";
    });
}
function expr_106_32() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_106_32_START";
    const expr_106_32 = `Total: $${getTotal()}`;
    "expr_106_32_END";
}
function expr_112_23() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_112_23_START";
    const expr_112_23 = products.filter(p => p.price > 500).length + ' premium products';
    "expr_112_23_END";
}
function expr_113_23() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_113_23_START";
    const expr_113_23 = products.flatMap(p => p.reviews).length + ' total reviews';
    "expr_113_23_END";
}
function expr_114_23() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_114_23_START";
    const expr_114_23 = cart.length > 0 ?
        `Ready to checkout ${cart.length} items` :
        'Your cart is empty';
    "expr_114_23_END";
}
function expr_123_28() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_123_28_START";
    const expr_123_28 = 'Clear Cart';
    "expr_123_28_END";
}
function expr_125_28() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_125_28_START";
    const expr_125_28 = isLoading ? 'Stop Loading' : 'Start Loading';
    "expr_125_28_END";
}
function expr_127_28() {
    const data = {
        products: [
            {
                id: 1,
                name: 'Laptop',
                price: 999,
                tags: ['electronics', 'computers'],
                reviews: [
                    { rating: 5, comment: 'Great laptop!' },
                    { rating: 4, comment: 'Good value' }
                ]
            },
            {
                id: 2,
                name: 'Phone',
                price: 699,
                tags: ['electronics', 'mobile'],
                reviews: [
                    { rating: 5, comment: 'Love it!' }
                ]
            }
        ],
        user: { name: 'John', isAdmin: true, preferences: { theme: 'dark', lang: 'en' } },
        cart: [],
        searchTerm: '',
        isLoading: false,
        addToCart(product) {
            this.cart.push(product);
        },
        getTotal() {
            return this.cart.reduce((sum, item) => sum + item.price, 0);
        }
    };
    const { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_127_28_START";
    const expr_127_28 = `Switch to ${user.preferences.theme === 'dark' ? 'light' : 'dark'} theme`;
    "expr_127_28_END";
}
//# sourceMappingURL=mixed-output.js.map