console.log ("Eloquent Javascript - Chapter 2: Exercise 3 - Chess Board")
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
//Passing this string to console.log should show something like this:
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// # # # #
//# # # #
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


var size = 8
var chess = " "
for (j = 0; j <size; j++)
{for (i = 0; i < size; i ++) {
if ((i + j) % 2 == 0)
  chess += "#";
else
  chess += " ";

}
 chess += "\n"

}

console.log(chess)
