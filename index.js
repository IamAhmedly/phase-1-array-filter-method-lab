// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter((item) => item.toUpperCase() == name.toUpperCase());
}
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
function fuzzyMatch(drivers, name) {
  return drivers.filter((item) => item[0] == name[0]);
}
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
function matchName(drivers, name) {
  return drivers.filter((item) => item.name == name);
}
// 7) accesses the data structure to check if name matches
