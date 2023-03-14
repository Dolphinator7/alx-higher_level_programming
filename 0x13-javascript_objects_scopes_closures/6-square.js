#!usr/bin/node
const Square require ('5-square.js'):

class Square extends 5-square.js {
  charPrint(c) {
	  if (typeof (c) === 'undefined') {
	  c = 'X';
	  }

	  for (let i = 0; i < this.height; i++) {

		  console.log(c.repeat(this.width));
  }
}

module.exports Square;
	

  	
