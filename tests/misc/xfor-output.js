"use strict";
function expr_3_17() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    "expr_3_17_START";
    const expr_3_17 = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    "expr_3_17_END";
}
function expr_11_25() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const color of colors) {
        "expr_11_25_START";
        for (const color of colors) {
            // x-for: color of colors
            const expr_11_25_item = "color";
            const expr_11_25_items = colors;
        }
        "expr_11_25_END";
    }
}
function expr_13_30() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const color of colors) {
        "expr_13_30_START";
        const expr_13_30 = color;
        "expr_13_30_END";
    }
}
function expr_18_25() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const user of users) {
        "expr_18_25_START";
        for (const user of users) {
            // x-for: user of users
            const expr_18_25_item = "user";
            const expr_18_25_items = users;
        }
        "expr_18_25_END";
    }
}
function expr_20_28() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const user of users) {
        "expr_20_28_START";
        const expr_20_28 = user.name;
        "expr_20_28_END";
    }
}
function expr_21_33() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const user of users) {
        for (const task of user.tasks) {
            "expr_21_33_START";
            for (const user of users) {
                for (const task of user.tasks) {
                    // x-for: task of user.tasks
                    const expr_21_33_item = "task";
                    const expr_21_33_items = user.tasks;
                }
            }
            "expr_21_33_END";
        }
    }
}
function expr_22_32() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    for (const user of users) {
        for (const task of user.tasks) {
            "expr_22_32_START";
            const expr_22_32 = task;
            "expr_22_32_END";
        }
    }
}
function expr_28_25() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    colors.forEach((item, index) => {
        "expr_28_25_START";
        // x-for: item of colors
        const expr_28_25_item = "item";
        const expr_28_25_items = colors;
        "expr_28_25_END";
    });
}
function expr_30_30() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    colors.forEach((item, index) => {
        "expr_30_30_START";
        const expr_30_30 = index;
        "expr_30_30_END";
    });
}
function expr_31_30() {
    const data = {
        colors: ['red', 'green', 'blue'],
        users: [
            { name: 'Alice', tasks: ['Task 1', 'Task 2'] },
            { name: 'Bob', tasks: ['Task 3', 'Task 4'] }
        ]
    };
    const { colors, users } = data;
    colors.forEach((item, index) => {
        "expr_31_30_START";
        const expr_31_30 = item;
        "expr_31_30_END";
    });
}
//# sourceMappingURL=xfor-output.js.map