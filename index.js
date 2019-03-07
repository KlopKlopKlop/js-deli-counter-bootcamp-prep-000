function takeANumber(line, newName) {
    line.push(newName);
    return `Welcome, ${newName}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  // if no one is in line return 'There is nobody waiting to be served!'
if (line.length === 0) {
    return `There is nobody waiting to be served!`;
} else {
  const next = line.shift();
  // return the first person in line
  return `Currently serving ${next}.`;
 }
}

function currentLine(line) {
  // if no one is in the line return "The current line is empty "
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    const nameAndPosition = 
    // return current line of poeple as a string
   return `The line is currently: 
  }
}