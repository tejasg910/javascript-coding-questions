//difference between arrow function and normal function

var global = "This is global string";

const obj = {
  name: "tejas",
  age: 20,

  getAverage: () => {
    console.log("this is from arrow function", this);
  },
  getData: function () {
    console.log("this is from normal function", this);
  },
};

obj.getAverage();
obj.getData();
