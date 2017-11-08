//basic constructor pattern.

//basic constructor pattern.

/**
 * A basic constructor pattern without prototype 
 * Every new person object created has it's own fullname
 * method.  
 */
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;

  // this.fullname = function() {
  //   return `${this.firstname} ${this.lastname}`;
  // }
}

/**
 * A better way to do is to use prototype inheritance. 
 * Don't use arrow syntax since it screws up with this scope
 */
Person.prototype.fullname = function () {
  return `${this.firstname} ${this.lastname}`;
}

let me = new Person('Parth', 'Desai');
console.log(me.fullname());

/**
 * ES2015 class provides a syntatic sugar 
 * over prototype inheritance but is much more elegant to read/write.
 */
class NewPerson {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        // this.fullname = function() {
        //   return `${this.firstname} ${this.lastname}`;
        // }
    }
    /**
     * A better way to do is to use prototype inheritance.
     * Don't use arrow syntax since it screws up with this scope
     */
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}


let me2015 = new NewPerson('Parth', 'Desai');
console.log(me2015.fullname());