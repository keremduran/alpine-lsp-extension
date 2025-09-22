"use strict";
function runExpr(scope, fn) {
    fn(scope);
}
function counter() {
    return {
        count: 2,
        hello: "world",
        sup: { hi: "there" },
        items: [
            { id: "1", name: "test" },
            { id: "2", name: "test" },
            { id: "2", name: "test", age: "20" }
        ],
        increment() {
            this.count++;
        },
        testExpression() {
            runExpr(this, ({ count, hello, items, increment, sup }) => {
                increment();
                count++;
                count === "test" && hello == "world";
                sup.hi;
                for (let item of items) { }
            });
        }
    };
}
//# sourceMappingURL=test.js.map