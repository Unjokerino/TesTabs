const objects = [
  {
    title: "Тракт",
    adreses: [
      {
        title: "Червишеский",
        count: 123
      },
      {
        title: "Московский",
        count: 1234
      },
      {
        title: "Тобольский",
        count: 430
      },
      {
        title: "Салаирский",
        count: 89
      }
    ]
  },
  {
    title: "Населеный пункт",
    adreses: [
      {
        title: "Луговое",
        count: 123
      },
      {
        title: "Зеленые холмы",
        count: 1234
      },
      {
        title: "Кулаково",
        count: 89
      },
      {
        title: "Червишево",
        count: 7
      },
      {
        title: "Якуши",
        count: 96
      },
      {
        title: "Ярд",
        count: 89
      }
    ]
  },
  {
    title: "СНТ/ДНТ",
    adreses: [
      {
        title: "Элита",
        count: 123
      },
      {
        title: "Тура",
        count: 1234
      },
      {
        title: "Зеленый бор",
        count: 430
      },
      {
        title: "Автомобилист",
        count: 89
      },
      {
        title: "Строитель",
        count: 598
      }
    ]
  },
  {
    title: "Коттеджный поселок",
    adreses: [
      {
        title: "Калинка",
        count: 123
      },
      {
        title: "Зубарево хиллз",
        count: 1234
      },
      {
        title: "Сосенка",
        count: 430
      },
      {
        title: "Три сосны",
        count: 89
      },
      {
        title: "Есенино",
        count: 9
      },
      {
        title: "Кочубеево",
        count: 29
      },
      {
        title: "Олимпия",
        count: 87
      },
      {
        title: "Вершины",
        count: 0
      },
      {
        title: "Что бы было что полистать",
        count: 89
      }
    ]
  }
];

function createCard(title, adreses) {
  let card = document.createElement("div");
  card.classList.add("card");

  let card_title = document.createElement("h3");
  card_title.innerText = title;

  let objects_container = document.createElement("div");
  objects_container.classList.add("objects_container");

  let search_input = document.createElement("input");
  search_input.setAttribute("type", "search");
  search_input.setAttribute("placeholder", "Поиск");

  let objects_list = document.createElement("ul");

  adreses.map((adress, index) => {
    let item = document.createElement("li");

    item.innerHTML = `  <input type="checkbox" name="${adress.title}" id="object_${adress.index}"> 
                        <label for="object_${adress.index}">
                            <span class="objct_title">${adress.title}</span> 
                            <span class="object_count">${adress.count}</span>
                        </label>`;

    objects_list.append(item);
  });

  objects_container.append(search_input);
  objects_container.append(objects_list);

  card.append(card_title);
  card.append(objects_container);

  document.querySelector("#outcity_page").append(card);
}

document.addEventListener("DOMContentLoaded", function(event) {
  objects.forEach(object => {
    createCard(object.title, object.adreses);
  });
});
