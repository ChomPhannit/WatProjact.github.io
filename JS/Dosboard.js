const getData = [
  {
    id: 1,
    Image: "../images/WatTn.png",
    Text: "ពុទ្ធិកបឋមសិក្សាសម្ដេចព្រះអភិសិរីធម្មិការាម",
  },
];
const header = document.querySelector(".header");
const result = getData.map((item) => {
    return `
      <div class="text-head">
        <h1>${item.Text}</h1>
      </div>
    `;
  }).join("");
  header.innerHTML = result;

// const infor = [
//   {
//     id = 1,
//   }
// ];