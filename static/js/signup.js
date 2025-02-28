async function handleSigninButton() {
  const response = await handleSignin();
  if (response.status == 201) {
    alert("이메일을 인증한 뒤 로그인 해주세요");
    window.location.replace(`${frontend_base_url}/users/login.html`);
  } else if (response.status == 400) {
    alert("값을 제대로 입력해 주십시오");
  } else {
    alert(`${response.statusText}`);
  }
}

checkLogin();
