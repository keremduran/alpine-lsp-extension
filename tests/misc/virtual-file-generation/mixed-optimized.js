"use strict";
function Expressions() {
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
    let { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    "expr_3_17_START";
    ({
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
    });
    "expr_3_17_END";
    "expr_38_24_START";
    `Welcome, ${user.name}`;
    "expr_38_24_END";
    "expr_39_25_START";
    user.isAdmin;
    "expr_39_25_END";
    "expr_40_30_START";
    'Admin Panel';
    "expr_40_30_END";
    "expr_42_23_START";
    user.preferences.theme;
    "expr_42_23_END";
    "expr_46_36_START";
    searchTerm;
    "expr_46_36_END";
    "expr_47_19_START";
    searchTerm.length > 0;
    "expr_47_19_END";
    "expr_47_50_START";
    `Searching for: ${searchTerm}`;
    "expr_47_50_END";
    "expr_50_21_START";
    isLoading;
    "expr_50_21_END";
    "expr_51_26_START";
    'Loading...';
    "expr_51_26_END";
    "expr_96_34_START";
    cart.length > 0;
    "expr_96_34_END";
    "expr_96_34_START";
    cart.length > 0;
    "expr_96_34_END";
    "expr_97_24_START";
    `Cart (${cart.length} items)`;
    "expr_97_24_END";
    "expr_106_32_START";
    `Total: $${getTotal()}`;
    "expr_106_32_END";
    "expr_112_23_START";
    products.filter(p => p.price > 500).length + ' premium products';
    "expr_112_23_END";
    "expr_113_23_START";
    products.flatMap(p => p.reviews).length + ' total reviews';
    "expr_113_23_END";
    "expr_114_23_START";
    cart.length > 0 ?
        `Ready to checkout ${cart.length} items` :
        'Your cart is empty';
    "expr_114_23_END";
    "expr_123_28_START";
    'Clear Cart';
    "expr_123_28_END";
    "expr_125_28_START";
    isLoading ? 'Stop Loading' : 'Start Loading';
    "expr_125_28_END";
    "expr_127_28_START";
    `Switch to ${user.preferences.theme === 'dark' ? 'light' : 'dark'} theme`;
    "expr_127_28_END";
}
function product_of_productsExpressions() {
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
    let { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        "expr_39_25_START";
        user.isAdmin;
        "expr_39_25_END";
        "expr_56_29_START";
        // x-for: product of products
        "expr_56_29_item_START";
        product;
        "expr_56_29_item_END";
        "expr_56_29_items_START";
        products;
        "expr_56_29_items_END";
        "expr_56_29_END";
        "expr_58_32_START";
        product.name;
        "expr_58_32_END";
        "expr_59_31_START";
        `$${product.price}`;
        "expr_59_31_END";
        "expr_60_31_START";
        `Product #${productIndex + 1}`;
        "expr_60_31_END";
        "expr_63_33_START";
        product.price > 500;
        "expr_63_33_END";
        "expr_64_38_START";
        'Premium Product';
        "expr_64_38_END";
        "expr_76_36_START";
        `Reviews (${product.reviews.length})`;
        "expr_76_36_END";
        "expr_87_64_START";
        'Add to Cart';
        "expr_87_64_END";
        "expr_90_36_START";
        'Apply Discount';
        "expr_90_36_END";
    });
}
function product_of_products__tag_of_product_tagsExpressions() {
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
    let { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        for (const tag of product.tags) {
            "expr_69_41_START";
            // x-for: tag of product.tags
            "expr_69_41_item_START";
            tag;
            "expr_69_41_item_END";
            "expr_69_41_items_START";
            product.tags;
            "expr_69_41_items_END";
            "expr_69_41_END";
            "expr_70_42_START";
            tag;
            "expr_70_42_END";
        }
    });
}
function product_of_products__review_of_product_reviewsExpressions() {
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
    let { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    products.forEach((product, productIndex) => {
        product.reviews.forEach((review, reviewIndex) => {
            "expr_77_41_START";
            // x-for: review of product.reviews
            "expr_77_41_item_START";
            review;
            "expr_77_41_item_END";
            "expr_77_41_items_START";
            product.reviews;
            "expr_77_41_items_END";
            "expr_77_41_END";
            "expr_79_43_START";
            `Review ${reviewIndex + 1}: ${review.comment}`;
            "expr_79_43_END";
            "expr_80_46_START";
            '★'.repeat(review.rating);
            "expr_80_46_END";
            "expr_81_47_START";
            `by ${user.name} on product ${product.name}`;
            "expr_81_47_END";
        });
    });
}
function cartItem_of_cartExpressions() {
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
    let { products, user, cart, searchTerm, isLoading, addToCart, getTotal } = data;
    cart.forEach((cartItem, cartIndex) => {
        "expr_98_29_START";
        // x-for: cartItem of cart
        "expr_98_29_item_START";
        cartItem;
        "expr_98_29_item_END";
        "expr_98_29_items_START";
        cart;
        "expr_98_29_items_END";
        "expr_98_29_END";
        "expr_100_34_START";
        cartItem.name;
        "expr_100_34_END";
        "expr_101_34_START";
        `$${cartItem.price}`;
        "expr_101_34_END";
        "expr_102_71_START";
        'Remove';
        "expr_102_71_END";
    });
}
//# sourceMappingURL=mixed-optimized.js.map