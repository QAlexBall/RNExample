// arrow function
{
  let result = [1, 2, 3].map((n) => n + 1);
  console.log(result);

  let result1 = [1, 2, 3].map(function(n) {
    return n + 1;
  });
  console.log(result1);
}

// JSX
/*
{
  exprot default React.createClass({
  getInitialState() {
    return { num: this.getRandomNumber() };
  },

  getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },

  render() {
    return <div>
      Your dice roll:
      {this.state.num}
    </div> 
  }
  });
}
*/

{
  let func1 = x => x * x;
  console.log(func1(3));

  let func2 = x => {
    if (x > 0) {
      return x * x;
    }
    else {
      return - x * x;
    }
  };
  console.log(func2(3));
}

let func3 = (x, y) => x * x + y * y;
console.log(func3(3, 3));


