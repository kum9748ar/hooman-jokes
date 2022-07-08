let apiHack = {
  fetchjoke: function () {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.displayJoke(data.value);
      });
  },
  displayJoke: function (joke) {
    document.getElementById("joke").innerHTML = joke;
  },
  fetchDog: function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.displayDog(data.message);
      });
  },
  displayDog: function (dog) {
    document.getElementById("dog_img").src = dog;
  }
};
apiHack.fetchjoke();
apiHack.fetchDog();
