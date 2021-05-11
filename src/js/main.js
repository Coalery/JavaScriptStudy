const id = "doralife12@naver.com";

const regExp =
  /^[A-Za-z0-9]+([\._-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\._-]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

console.log(regExp.test(id));
