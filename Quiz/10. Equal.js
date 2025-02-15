console.log(undefined == false);
console.log(null == false);

// false because
/**
Explanation:

undefined == false:
In JavaScript, the equality operator (==) applies type coercion according to specific rules. However, when comparing undefined to any value other than null, it does not convert undefined to any other type. In fact, undefined is only loosely equal to null (i.e., undefined == null is true). Therefore, undefined == false evaluates to false.

null == false:
Similarly, null is only loosely equal to undefined and nothing else. When you compare null with any value (including false), it does not undergo conversion to a boolean. Thus, null == false also evaluates to false.

So even though both undefined and null are considered "falsy" values when converted explicitly to booleans (e.g., Boolean(undefined) or Boolean(null) returns false), the abstract equality algorithm (==) does not convert them in the same way when compared with false.
 */
