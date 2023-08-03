function main(input) {
    const number = input.trim().split(" ");
    var x1 = parseInt(number[0]);
    var y1 = parseInt(number[1]);
    var x2 = parseInt(number[2]);
    var y2 = parseInt(number[3]);
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(`Distance: ${distance}`);
  }
  