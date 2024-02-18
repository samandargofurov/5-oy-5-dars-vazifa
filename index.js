const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const age = document.querySelector("#age");
const phoneNumber = document.querySelector("#phoneNumber");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const nat = document.querySelector("#nationality");
const desc = document.querySelector("#desc");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const wrapper = document.querySelector("#wrapper");

function validate(name, surname, age, phoneNumber, email, password, nat, desc) {
  // Tekshiruv: Name
  if (!name.value) {
    alert("Ism kiritilishi shart");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "black";
  }

  if (name.value.trim().length < 3) {
    alert("ism kamida 3 ta belgidan iborat bolishi kerak");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "black";
  }

  if (Number(name.value[0])) {
    alert("ism raqamdan boshlanmaydi");
    name.focus();
    name.style.outlineColor = "red";
    return false;
  } else {
    name.style.outlineColor = "black";
  }

  // // Tekshiruv: Surname
  if (!surname.value) {
    alert("familiya kiritilishi shart");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "black";
  }

  if (surname.value.trim().length < 6) {
    alert("familiya kamida 3 ta belgidan iborat bolishi kerak");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "black";
  }

  if (Number(surname.value[0])) {
    alert("familiya raqamdan boshlanmaydi");
    surname.focus();
    surname.style.outlineColor = "red";
    return false;
  } else {
    surname.style.outlineColor = "black";
  }

  // Tekshirish: Age
  if (age.value <= 0 || age.value > 120) {
    alert("yosh notogri kiritildi");
    age.focus();
    age.style.outlineColor = "red";
    return false;
  } else {
    age.style.outlineColor = "black";
  }

  // Tekshirish: Phone Number
  if (phoneNumber.value.trim().length != 13) {
    alert("belgilar soni notogri");
    phoneNumber.focus();
    phoneNumber.style.outlineColor = "red";
    return false;
  } else {
    phoneNumber.style.outlineColor = "black";
  }

  if (phoneNumber.value.substring(0, 4) != "+998") {
    alert("Telefon raqam formati notogri");
    phoneNumber.focus();
    phoneNumber.style.outlineColor = "red";
    return false;
  } else {
    phoneNumber.style.outlineColor = "black";
  }

  if (!Number(phoneNumber.value.substring(1))) {
    alert("Telefon raqam notogri kiritildi");
    phoneNumber.focus();
    phoneNumber.style.outlineColor = "red";
    return false;
  } else {
    phoneNumber.style.outlineColor = "black";
  }

  // Tekshirish: Email
  if (!email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  } else {
    email.style.outlineColor = "black";
  }

  // Tekshirish: Password
  if (password.value.trim().length != 8) {
    alert("Belgilar soni 8 ta bolishi kerak");
    password.focus();
    password.style.outlineColor = "red";
    return false;
  } else {
    password.style.outlineColor = "black";
  }

  // Tekshirish: Description
  if (!nat) {
    alert('notogri');
    return false
  }

  // Tekshirish: Description
  if (desc.value.length <= 1) {
    alert("Ma'lumot bo'lishi kerak");
    desc.focus();
    desc.style.outlineColor = "red";
    return false;
  } else {
    desc.style.outlineColor = "black";
  }

  return true;
}

function getData() {
  let users = [];
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  return users;
}

btn && btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (validate(name, surname, age, phoneNumber, email, password, nat, desc)) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        password: password.value,
        nat: nat.value,
        desc: desc.value
      };

      let u = getData();
      u.push(user);
      localStorage.setItem("users", JSON.stringify(u));
      form.reset();

      let card = createCard(user);
      wrapper.innerHTML += card;
    } else {
      alert("Xatolik yuzaga keldi, qaytadan urinib ko'ring");
    }
  });

btn2 && btn2.addEventListener('click', function (e) {
  e.preventDefault();
  const user = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
    password: password.value,
    nat: nat.value,
    desc: desc.value
  };

  localStorage.clear(user);

  function createCard(user) {
    return `
    <div class="card">
        <h3>${user.name}</h3>
        <h3>${user.surname}</h3>
        <h3>${user.age}</h3>
        <h3>${user.phoneNumber}</h3>
        <h3>${user.email}</h3>
        <h3>${user.password}</h3>
        <h3>${user.nat}</h3>
        <h3>${user.desc}</h3>
    </div>
    `;
  }

  createCard.innerHTML = '';

})

function createCard(user) {
  return `
  <div class="card">
      <h3>${user.name}</h3>
      <h3>${user.surname}</h3>
      <h3>${user.age}</h3>
      <h3>${user.phoneNumber}</h3>
      <h3>${user.email}</h3>
      <h3>${user.password}</h3>
      <h3>${user.nat}</h3>
      <h3>${user.desc}</h3>
  </div>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  let users = getData();
  users.forEach(user => {
    let card = createCard(user);
    wrapper.innerHTML += card;
  });
})