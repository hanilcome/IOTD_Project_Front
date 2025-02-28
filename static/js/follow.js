const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");

async function handleFollows(e) {
  const listWrap = document.getElementById("list-wrap");
  listWrap.innerHTML = "";

  const follows = await getFollows(userId);

  const followTitle = document.getElementById("follow-title");
  followTitle.innerText = `${follows.nickname}'s Followers List`;

  let users = follows.followers;
  // 유저 id 기준으로 정렬(오름차순)
  users.sort((a, b) => a.id - b.id);

  if (e.id == "followings") {
    users = follows.followings;
    followTitle.innerText = `${follows.nickname}'s Followings List`;
  }
  users.forEach((user) => {
    let profileImg = `${no_image}`;
    if (user.profile_img) {
      profileImg = `${backend_base_url}${user.profile_img}`;
    }
    console.log(user);
    listWrap.insertAdjacentHTML(
      "beforeend",
      `<div class="list" onclick="userProfile(${user.id})">
    <div class="imgBx">
      <img src="${profileImg}" alt="" class="character" />
    </div>
    <div class="content">
      <h4>${user.nickname}</h4>
      <!-- <p></p> -->
    </div>
    <div class="icon"><i class="ri-user-follow-fill"></i></div>
  </div>`
    );
  });
}

window.onload = async function () {
  const followerBox = document.getElementById("followers");
  handleFollows(followerBox);
};
