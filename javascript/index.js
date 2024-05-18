function getFee(isMember) {
  return isMember ? "$2" : "$10";
}

console.log(getFee(true))
console.log(getFee(false))