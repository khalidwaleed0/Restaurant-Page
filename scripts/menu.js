const menuContent = `<div id="cards-container">
                        <div class="card">
                        <img src="/images/food/ramen.jpeg" alt="Ramen">
                        <p>Ramen</p>
                        </div>
                        <div class="card">
                        <img src="/images/food/udon.jpeg" alt="Udon">
                        <p>Udon</p>
                        </div>
                        <div class="card">
                        <img src="/images/food/tofu.jpeg" alt="Tofu">
                        <p>Tofu</p>
                        </div>
                        <div class="card">
                        <img src="/images/food/Onigiri.jpeg" alt="Onigiri">
                        <p>Onigiri</p>
                        </div>
                        <div class="card">
                        <img src="/images/food/miso-soup.jpeg" alt="Miso Soup">
                        <p>Miso Soup</p>
                        </div>
                        <div class="card">
                        <img src="/images/food/mentaiko.jpeg" alt="Mentaiko">
                        <p>Mentaiko</p>
                        </div>
                        </div>`;

export function appendMenuContent() {
    document.getElementById("content").innerHTML = menuContent;
}
