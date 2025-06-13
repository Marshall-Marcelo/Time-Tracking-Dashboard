const fetchData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

const filter_list = document.getElementById("filter-list");
const cards = document.querySelectorAll(".card");
const [profile, ...metrics] = cards;
const time_cards = [...metrics];

fetchData().then((data) => {
  filter_list.addEventListener("click", (e) => {
    let duration = e.target.getAttribute("value");

    time_cards.forEach((card, i) => {
      const title = card.querySelector(".term");
      const total = card.querySelector(".total");
      const last = card.querySelector(".last");
      const timeframe = data[i].timeframes[duration];
      const previous = data[i].timeframes[duration].previous;

      title.textContent = data[i].title;
      total.textContent = `${timeframe.current}hrs`;
      let label;
      switch (duration) {
        case "daily":
          label = "Yesterday - ";
          break;
        case "weekly":
          label = "Last Week - ";
          break;
        case "monthly":
          label = "Last Month - ";
          break;
      }
      last.textContent = `${label}${previous}`;
    });
  });
});
