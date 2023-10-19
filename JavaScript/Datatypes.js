// Data type - any value stored by a variable
// e.g let age = 35;
/*
35 in variable age is a number data type


There are 8 basic datatypes in Javscript
->Primitive data types
    -Number  - Represents numeric values, both integers and floating-point numbers.
                Example : let age =30;
    -String  - Represents a sequence of characters, encolsed in single or double quotes.
                example - let name ="John"
    -Boolean  - Represents a true or flase value
                Example : let isStudent = true;
    -Undefined - Represents a variable that has been decalred but has no assigned value.
                Example let city;
    -Null  -Represents the absence of a value or an empty value
                Example : let emptyValue = null;
    -Symbol - Represnts a unique and immutable value, primarily used as object property keys.
    -bigint - for integer numbers of arbitary length.

-> Non Primitve data types
    -Object - Represents a collection of key-value pair, where values can be of any data type.
    Objects also include functions.
            example : let person = {name: "Alice", age :25};

    -Array: A special type of object used to store ordered lists of values.
            example: let colors = ["red", "green", "blue"];

Key Difference between Primitive and Non-Premitive data types

1.Mutability: Primitive data types are imutable =, meaning their values cannot be changed after creation.
              None -Primitive data types are mutable, their values can be modified.

2. Storage: Primitive data types are stored directly in memory and accessed by value. Non-primitive data
            types are stored as references in memory and accessed indirectly.

3. Passing: When primitive data types are passed to functions or assigned to variables, they are copied by value,
            Non Primitive data types are passed by reference, meaning the reference to the object in memory is passed.

4. Type comparison : When comparing primitive types, you are comparing their values. For non-primitive types,
                     You are comparing references to objects in memory.

5. Equality: When comparing non-primitive data types for equality, you need to check whether they refer to 
             the same object (by comparing references). Primitive data types are compared by value.
*/