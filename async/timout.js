const timout = () => {
  setTimeout(() => {
    console.log("this timout will  call after 3 seconds");
  }, 3000);
};

module.exports = { timout };
