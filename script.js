// Create container, add class and append to body
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Create panels, add class and append to container
const list = [1, 2, 3, 4, 5];
const panel = document.createElement("div");
panel.classList.add("panel");
panel.style.backgroundImage =
  "url('https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')";
panel.innerHTML = `<h3>MailChimp</h3>`;
list.forEach((item) => {
  container.innerHTML += panel.outerHTML;
});

// Get panels and toggle class on click
const panels = document.querySelectorAll(".panel");
panels[0].classList.add("active");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

function addActiveClass(panel) {
  panel.classList.add("active");
}
