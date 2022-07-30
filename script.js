fetch("./data.json")
.then(function (response) {
    return response;
  })
.then(function (data) {
    return data.json();
})
.then(function (prices) {
    prices.forEach(i => {
        document.querySelector(".bars").innerHTML += `
        <div class="bar-gp">
          <div class="bar" style="height:${i.amount*2}px;"></div>
          <div class="value">$${i.amount}</div>
          <span>${i.day}</span>
        </div>`;
    });
    function dayCheck(date = new Date, local = "en-IR") {
        const bars = document.querySelectorAll(".bar-gp");
        const today =  date.toLocaleDateString(local, {weekday: 'short'}).toLowerCase() ;
        bars.forEach(item => {
            if (item.children[2].innerText === today) {
                item.children[0].classList.add("active");
            }
        })
    };
    dayCheck();
  })


