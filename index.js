// code your solution here
// defines saturdayFun function declaration as specified
//1) function exists
//2) uses the default activity 'roller-skate' when no arguments are passed
//3) permits the default activity to be overriden
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

//defines mondayWork function expression as specified
//function exists
//uses the default activity 'go to the office' when no arguments are passed
//permits the default activity to be overriden
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}
//we want to use let for this as we may have to "overide" in the future

//defines wrapAdjective function according to the specification
//function exists
//when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
 //when initialized with '||' creates a function that
 let wrapAdjective = function(style="*") {
    return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
     }
 }