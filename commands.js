const fs = require("fs");

const add = (lesson, price) => {
  let lessonList = [];

  try {
    lessonList = JSON.parse(fs.readFileSync("subscribtion.json"));
  } catch (e) {
    console.log("i don't care");
  }

  let index = lessonList.findIndex((i) => i.lesson === lesson);
  if (index === -1) {
    lessonList.push({ lesson, price });
    console.log(lessonList);
  } else {
    lessonList[index].price += price;
  }

  fs.writeFileSync("subscribtion.json", JSON.stringify(lessonList));
};

module.exports = { add };
