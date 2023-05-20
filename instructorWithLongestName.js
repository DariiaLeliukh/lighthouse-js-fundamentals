const instructorWithLongestName = function (instructors) {
  var longestName = {
    name: "",
    course: ""
  }
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.name.length) {
      longestName.name = instructors[i].name;
      longestName.course = instructors[i].course;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "Domascus", course: "Web"},
  {name: "David555", course: "iOS"}
]));