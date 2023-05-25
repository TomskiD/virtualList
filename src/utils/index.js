import { loremIpsum } from "lorem-ipsum";

export const generateLoremIpsum = () => {
  const minLength = 100;
  const maxLength = 600;
  const loremText = loremIpsum({
    count: Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength,
    units: "words",
  });
  return loremText;
};

export const getRandomEmail = () => {
  const names = [
    "John@gmail.com",
    "Emma32@gmail.com",
    "Liamasa@gmail.com",
    "Olivia2123@gmail.com",
    "William2211@gmail.com",
    "Avaaaa@wp.pl",
    "James@wp.pl",
    "Sophia@wp.pl",
    "Benjamin@wp.pl",
    "Isabellaaaaa@o2.pl",
    "Michael312@gmail.com",
    "Mia@gmail.com",
    "Tom@gmail.com",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

export const getRandomTitle = () => {
  const titles = [
    "Welcome message",
    "Vue3 news",
    "Hello world !",
    "Newsletter",
    "Blog news",
    "Fun facts",
    "Bloopers",
    "Just a message",
  ];
  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];
};

export const generateArrayOfObjects = () => {
  const arrayOfObjects = [];
  const randomNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000
  for (let i = 0; i < randomNumber; i++) {
    arrayOfObjects.push({
      id: i,
      title: getRandomTitle(),
      desc: generateLoremIpsum(),
      email: getRandomEmail(),
    });
  }
  return arrayOfObjects;
};
