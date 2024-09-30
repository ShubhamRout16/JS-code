// task1-
// Create a Rectangle object with a calculateArea method. The calculateArea method should take no arguments and return the area of the rectangle.
// The Rectangle object should have two properties: width and height.
// The calculateArea method should use the width and height properties to calculate the area of the rectangle.
// The area of the rectangle should be calculated as width * height.

const Rectangle = {
    width: 10,
    height: 10,
    calculateArea: function(){
        return this.width * this.height ;
    }
}
console.log(Rectangle.calculateArea());


// What is the use of this keyword?
// The this keyword is a fundamental concept in JavaScript, and it's used to refer to the current object being executed.

// In the context of the Rectangle object, this refers to the Rectangle object itself. When you use this inside the calculateArea method, it allows you to access the object's properties, such as width and height, without having to use the object's name explicitly


// --------------------------------------------------------------------------------------------------------...

// task 2-
// Modify the Rectangle object to include a new method called scale that takes a scaling factor as an argument. The scale method should multiply both the width and height properties by the scaling factor.

// For example, if you call rectangle.scale(2), the width should become 20 and the height should become 20.

// Here's a hint: you can use the this keyword to access and modify the object's properties.

// Once you've implemented the scale method, try chaining it with the calculateArea method to calculate the area of the scaled rectangle.

const rectangle = {
    width: 10,
    height: 10,
    calculateArea: function(){
      return this.width * this.height;
    },
    // Add the scale method here
    scale: function(factor){
        this.width = this.width*factor;
        this.width = this.height*factor;
    },
    //  task 2.5
    logProperties: function(){
        console.log(`width: ${this.width} , height: ${this.height}`);
        return this;
    },
    getDimensions: function(){
        return {
            width: this.width,
            height: this.height,

        };
    },
    //  task 4
    getPerimeter: function(){
        return 2*(this.width + this.height);
    },
    // task 5
    getArea: function(){
        return this.width * this.height ;
    }
  };

  
  console.log(rectangle.calculateArea()); // Output: 100
  rectangle.scale(2);
  rectangle.scale(3);
  console.log(rectangle.logProperties());
  console.log(rectangle.calculateArea()); // Output: ?
  console.log(rectangle.getDimensions());
  console.log(rectangle.getPerimeter());
  console.log(rectangle.getArea());
  
  
  
  




