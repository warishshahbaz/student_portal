let arr = [
  {
    id: 1,
    name: "shahbaz",
    gender: "male",
    class: 12,
    marks: 99,
    passing: "failed",
    email: "shahbaz@gmail.com",
  },
  {
    id: 2,
    name: "Rahul",
    gender: "male",
    class: 11,
    marks: 86,
    passing: "failed",
    email: "rahul@gmail.com",
  },
  {
    id: 3,
    name: "Tannu",
    gender: "female",
    class: 10,
    marks: 49,
    passing: "pass",
    email: "tanu@gmail.com",
  },
];

function search() {
  let val = document.getElementById("input").value;

  let res = arr.filter((item) =>
    item.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())
  );
  tabel(res);
}

function tabel(data) {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = data.map((val, i) => {
    return `<tr>
    <td>${val.id}</td>
    <td>${val.name}</td>
    <td>${val.gender}</td>
    <td>${val.class}</td>
    <td>${val.marks}</td>
    <td>${val.passing}</td>
    <td>${val.email}</td>
    </tr>`;
  });
}

function handleSortByAssending() {
  let res = arr.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

  tabel(res);
}
function handleSortByDesc() {
  let res = arr.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase

    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });

  tabel(res);
}

function handleByMarks() {
  let res = arr.sort((a, b) => {
    const nameA = a.marks; // ignore upper and lowercase
    const nameB = b.marks; // ignore upper and lowercase

    if (nameA - nameB) {
      return -1;
    }
    if (nameB - nameA) {
      return -1;
    }

    // names must be equal
    return 0;
  });
  tabel(res);
}

function handleByPassing() {
  let res = arr.sort((a, b) => {
    const nameA = a.passing.toUpperCase(); // ignore upper and lowercase
    const nameB = b.passing.toUpperCase(); // ignore upper and lowercase

    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  });

  tabel(res);
}

function handleByClass() {
  let res = arr.sort((a, b) => {
    const nameA = a.class; // ignore upper and lowercase
    const nameB = b.class; // ignore upper and lowercase

    if (nameA - nameB) {
      return -1;
    }
    if (nameB - nameA) {
      return -1;
    }

    // names must be equal
    return 0;
  });
  tabel(res);
}

function handleByGender() {
  let res = arr.sort((a, b) => {
    const nameA = a.gender.toUpperCase(); // ignore upper and lowercase
    const nameB = b.gender.toUpperCase(); // ignore upper and lowercase

    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  });

  tabel(res);
}
function filter() {}
tabel(arr);
