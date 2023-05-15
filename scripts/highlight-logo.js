let headerGitIcons = document.querySelectorAll(".git");

headerGitIcons.forEach((icon) => {
    icon.addEventListener("mouseover", e => icon.src = "images/git-full.svg");
    icon.addEventListener("mouseout", e => icon.src = "images/git-empty.svg");
});
