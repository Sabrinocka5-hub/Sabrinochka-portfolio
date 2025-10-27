function openProject(num) {
  const projectPaths = {
    1: "Project1/index.html",
    3: "Project3/index.html",
    4: "Project4/index.html",
    5: "Project5/index.html"
  };

  const encodedPath = encodeURI(projectPaths[num]);
  window.open(encodedPath, "_blank");
}
