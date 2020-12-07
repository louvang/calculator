# [Calculator](https://voidteddy.github.io/calculator/)

This calculator solves problems using JavaScript. It is an assignment from [The Odin Project](https://www.theodinproject.com/courses/foundations/lessons/calculator) where the problem `12 + 7 - 5 * 3` must equal `42`. To achieve this answer, the problem must be solved from left to right rather than using the order of operations. [View the calculator.](https://voidteddy.github.io/calculator/)

<p align="center"><a href="https://voidteddy.github.io/calculator/" target="_blank"><img src="https://voidteddy.github.io/calculator/img/preview.png" alt="Calculator Preview" width="750px" /></a></p>

## How To

Simply click on the buttons or type in numbers to calculate a problem. Some important things to note:

- Calculations are made from left to right. This calculator does NOT use the order of operations.
- Calculations resulting in a decimal are rounded up to the 4th digit.

## About Code

The calculator simply uses JavaScript. Switch statements were used for the various inputs of either a keydown event or a mouse click. A function will execute once a switch case is true.

## Thoughts

I had some difficulty with this primarily with solving the problems that were inputted into the calculator. I realized that I was calculating the problems using the order of operations so I changed the regexes that needed to be matched to just a universal expression that used all operators. Doing so helped to calculate the problems from left to right.

My next problem was trying to figure out how to wire keyboard events and mouse events together. They do not yield the same attributes. I first wired up these eventlisteners using the mouse buttons that pulled a `target.id`. However, the keyboard function doesn't have an `id` attribute.

I soon found that keyboard and mouse events have a `event.type` which indicates whether it is a mouse click or a keyboard press. The variable that the switch statements tested was then changed depending on the `event.type`. I simply had to add a few extra cases to match the particular events.

Last and perhaps least, I realized that users could use multiple decimal points in one number such as `5.4.1 + 3.2.1`. Obviously, this isn't logically calculable. I had to use regex to match whether or not the number being inputted already had a decimal. I was having trouble until I stumbled upon the `$` in regex. This looks for a match at the end of the string. It was exactly what I needed to ensure what was just recently inputted wasn't already a decimal. The regex altogether became ` \d+\.+\d+$` (space included for good measure).

## Further Improvements

This is the most basic of calculators and isn't meant to solve algebraic or scientific problems. The only further improvements this calculator needs is perhaps visual feedback. Some ideas include:

- When a key is pressed, the button on the calculator visually changes.
- Differentiate between 'focused' and 'pressed' buttons. Currently, if a button is clicked, the 'focus' attributes clings onto it. Perhaps these attributes should occur on 'click' and release into a 'focused' form.

This would be a good exercise for creating React page especially with the state changes for the displayArea. I will most likely make a React version in the future just to practice with the extra improvements implemented.
