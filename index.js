const fetchData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

const filter_list = document.getElementById("filter-list");
const cards = document.querySelectorAll(".card");
const [profile, ...metrics] = cards;
const time_cards = [...metrics];
console.log(time_cards);

fetchData().then((data) => {
  console.log(data);
  filter_list.addEventListener("click", (e) => {
    let duration = e.target.getAttribute("value");
    for (let [i, value] of data.entries()) {
      console.log(`${i}`);
    }
  });
});
