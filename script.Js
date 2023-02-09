


async function getStarCount() {
    const response = await fetch("https://api.github.com/users/Qovery/repos");
    const data = await response.json();
  
    let starCount = 0;
    for (const repo of data) {
      starCount += repo.stargazers_count;
    }
  
    const starCountElement = document.createElement("span");
    starCountElement.innerHTML = `${starCount}`;
    document.querySelector(".main-container .title a").appendChild(starCountElement);
  }
  
  getStarCount();