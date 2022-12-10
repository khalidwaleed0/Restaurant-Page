const homeContent = document.createElement("div");
homeContent.innerHTML = `<p>Best Ramen in Japan</p>
                        <br />
                        <p>This is where the 7th Hokagi used to eat.</p>
                        <img id="owner-image" src="images/ichiraku.png" alt="Ichiraku Ramen Owner" />
                        <p>Order online or visit us!</p>`;

export function appendHomeContent() {
    document.getElementById("content").append(homeContent);
}
