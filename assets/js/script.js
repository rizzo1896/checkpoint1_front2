const divContent = document.getElementById("content");
const myForm = document.getElementById("myForm");

const addNewCard = (e) => {
  e.preventDefault();

  const project = document.createElement("div");
  const title = document.createElement("h2");
  const subtitle = document.createElement("p");
  const img = document.createElement("img");
  const btn = document.createElement("button");

  project.className = "card";
  project.style.width = "18rem";

  title.innerHTML = e.target.title.value;
  title.className = "card-title";

  subtitle.innerHTML = e.target.description.value;
  subtitle.className = "card-text";

  img.src = e.target.url_image.value;
  img.width = 200;
  img.className = "card-img-top";

  btn.className = "btn btn-primary";
  btn.textContent = "apagar";

  project.appendChild(img);
  project.appendChild(title);
  project.appendChild(subtitle);
  project.appendChild(btn);

  divContent.appendChild(project);
  btn.addEventListener("click", (e) => {
    divContent.removeChild(project);
  });
};

myForm.addEventListener("submit", addNewCard);
