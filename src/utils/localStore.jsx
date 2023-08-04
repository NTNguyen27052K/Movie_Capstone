export const setLocal = (name, data) => {
  const dataJs = JSON.stringify(data);
  localStorage.setItem(name, dataJs);
};

export const getDataLocal = (name) => {
  const value = localStorage.getItem(name);

  //   JSON.parse(value) ? JSON.parse(value) : {};
  if (JSON.parse(value)) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

// export const luuXuongLocal = (ten, data) => {
//   const newData = JSON.stringify(data);
//   localStorage.setItem(ten, newData);
// };

// export const layDuLieuLocal = (ten) => {
//   const value = localStorage.getItem(ten);
//   // khi parse xong có 2 trường hợp xảy ra, một là có dữ liệu, hai sẽ là null nếu như không có dữ liệu
//   if (JSON.parse(value)) {
//     return JSON.parse(value);
//   } else {
//     return null;
//   }
//   // console.log(ten)

// };
