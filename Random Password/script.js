// Database قاعدة البيانات
// "abcdefghijklmnopqrstuvwxyz"
// "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// "1234567890"
// "!@#$%^&*(){}"

const chars = [
  {
    letters_small: "abcdefghijklmnopqrstuvwxyz",
  },
  {
    letters_cap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  {
    numbers: "1234567890",
  },
  {
    characters: "!@#$%^&*(){}",
  },
];

// دالة generate
function generate() {
  let randomPassword = "";
  let collection_one = chars[0]["letters_small"];
  let collection_two = chars[1]["letters_cap"];
  let collection_three = chars[2]["numbers"];
  let collection_four = chars[3]["characters"];

  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_one.length));

  randomPassword =
    randomPassword +
    collection_two.charAt(Math.floor(Math.random * collection_two.length));

  randomPassword =
    randomPassword +
    collection_three.charAt(Math.floor(Math.random * collection_three.length));

  randomPassword =
    randomPassword +
    collection_four.charAt(Math.floor(Math.random * collection_four.length));
}
