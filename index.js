// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  let win = array.find( el => el.result === "W");
  return !!win ? win.year : undefined

}
