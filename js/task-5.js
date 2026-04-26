const roses = [

  {
    name: "Красная роза",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94"

  },

  {
    name: "Патсолнух",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651"

  },

  {
    name: "Белая роза",
    image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166"

  },

  {
    name: "Пион",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4"

  },

  {
    name: "Нежно-красные розы",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac"

  },

  {
    name: "Тюльпаны",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551"

  }

];

const gallery = document.querySelector("#gallery");

roses.forEach((rose) => {
    const card = document.createElement('div');
    const img = document.createElement("img");
    img.src = rose.image;
    img.alt = rose.name;
    img.width = 250;

    const title = document.createElement("p");
    title.textContent = rose.name;

    card.append(img, title);
    gallery.append(card);
});
