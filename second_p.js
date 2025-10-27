function openProject(num) {
  const projectPaths = {
    1: "Project1",
    3: "Project3",
    4: "Project4",
    5: "Project5"
  };

  // правильный путь для GitHub Pages
  const baseURL = "https://sabrinocka5-hub.github.io/Sabrinochka-portfolio/";

  // открываем index.html внутри каждой папки проекта
  const projectURL = `${baseURL}${projectPaths[num]}/index.html`;
  window.open(projectURL, "_blank");
}
