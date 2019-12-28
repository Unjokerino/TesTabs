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
      ,
      {
        title: "Что бы было что полистать",
        count: 89
      }
      ,
      {
        title: "Что бы было что полистать",
        count: 89
      }
    ]
  }
];
searchAdreses = (event, title) => {

  let searchQuery = event.target.value !== null && event.target.value !== undefined ? event.target.value.toLowerCase() : ''
  let searchResult = []
  let list = document.querySelector(`ul[name="${title}"]`)
  let currentIndex
  objects.forEach((object, index) => {
    if (object.title === title) {
      currentIndex = index
    }
  })

  if (searchQuery !== '') {
    Object.entries(objects[currentIndex].adreses).forEach(adressArr => {
      const [key, adress] = adressArr
      if (adress.title.toLowerCase().includes(searchQuery)) {
        searchResult = [...searchResult, adress]

      }
    })
  } else {
    searchResult = objects[currentIndex].adreses
  }

  list.innerHTML = ''
  searchResult.forEach((result, index) => {

    list.append(createCardItem(result, title, index))
  })
}

countAdressValue = event => {

  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  let result = []
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {

      let count = Number(checkbox.nextElementSibling.querySelector('.object_count').innerText)

      result = [...result, count]
    }
  })
  console.log(result.reduce((accumulator, currentValue) => accumulator + currentValue))
}

createCardItem = (adress, title, index) => {

  let item = document.createElement("li");

  item.innerHTML = `<input type="checkbox" name="${adress.title}" id="${title}_${adress.title}"> 
                        <label for="${title}_${adress.title}">
                            <span class="object_title">${adress.title}</span> 
                            <span class="object_count">${adress.count}</span>
                        </label>`;
  item.querySelector('input').addEventListener('click', () => countAdressValue(event))

  return item
}

createCard = (title, adreses) => {

  let card = document.createElement("div");
  card.classList.add("card");

  let card_title = document.createElement("h3");
  card_title.innerText = title;

  let objects_container = document.createElement("div");
  objects_container.classList.add("objects_container");

  let search_input = document.createElement("input");
  search_input.setAttribute("type", "search");
  search_input.setAttribute("placeholder", "Поиск");
  search_input.addEventListener('input', () => searchAdreses(event, title))

  let objects_list = document.createElement("ul");
  objects_list.setAttribute('name', title)

  adreses.map((adress, index) => {
    objects_list.append(createCardItem(adress, title, index));

  });

  objects_container.append(search_input);
  objects_container.append(objects_list);

  card.append(card_title);
  card.append(objects_container);

  return (card);

}

clearCheckboxes = () => {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(checkbox => {
    checkbox.checked = false
  });
}

createCardContainer = (objects) =>{
  let card_container = document.createElement("div");
  card_container.classList.add('card_container')

  objects.forEach(object => {
    card_container.append(createCard(object.title, object.adreses))
  });

  return card_container

}

document.addEventListener("DOMContentLoaded", function (event) {
  let clear_btn = document.querySelector('#clear_btn')
  let accept_btn = document.querySelector('#accept_btn')

  document.querySelector("#outcity_page").prepend(createCardContainer(objects));
  clear_btn.addEventListener('click', () => clearCheckboxes())

});




