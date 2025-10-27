function openProject(num) {
  const projectFiles = {
    1: "project.html",
    3: "Project_3.html",
    4: "Project_4.html",
    5: "Project_5.html"
  };

  const encodedPath = encodeURI(`../Project ${num}/${projectFiles[num]}`);
  window.open(encodedPath, "_blank");
}
