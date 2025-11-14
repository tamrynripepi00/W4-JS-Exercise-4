// TODO: Create a function that validates user input
// TODO: Create a function that demonstrates multiple error types
// TODO: Create a collection of helper functions for string manipulation
// TODO: Create helper functions for array operations

// TODO: Create a function that validates user input
function userNameInput() {
    if (input === undefined || input === null || input === "") {
        throw new Error("User cannot be empty");
    }

    if (typeof input !== "string") {
        throw new TypeError("Your input needs to be a string"); 
    }
    return true;
}

// TODO: Create a function that demonstrates multiple error types
function processData() {
    try {
        userNameInput("");
    } catch (error) {
        console.error("Oops error occurred", error.message);
    }

}
console.log(processData())
    try {
        userNameInput();
    } catch (error) {
        console.error("I caught an error:", error.message);
    }

// TODO: Create a collection of helper functions for string manipulation
username = "Tamryn"
string_helpers = {
    upper : function(word){return word.toUpperCase()},
    lower : function(word){return word.toLowerCase()},
    divide : function(word){return word.split("")},
}

console.log(string_helpers.upper(username))
console.log(string_helpers.lower(username))
console.log(string_helpers.divide(username))
console.log("-".repeat(60))

// TODO: Create helper functions for array operations
my_array = [1,2,3,4,5]

array_helpers = {
    pop : function(array){return array.pop()},
    shift : function(array){return array.shift()},
    join: function(array){return array.join()}
}

console.log(array_helpers.pop(my_array))
console.log(array_helpers.shift(my_array))
console.log(array_helpers.join(my_array))