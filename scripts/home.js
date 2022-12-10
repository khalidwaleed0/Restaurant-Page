console.log(7);
const homeContent = `<p>Best Ramen in Japan</p>
                        <br />
                        <p>This is where the 7th Hokagi used to eat.</p>
                        <img id="owner-image" src="images/ichiraku.png" alt="Ichiraku Ramen Owner" />
                        <p>Order online or visit us!</p>`;
const btnHome = document.getElementById("home");
const btnMenu = document.getElementById("menu");
const btnContact = document.getElementById("contact");
export function appendHomeContent() {
	if (!btnHome.hasAttribute("active")) {
        btnHome.setAttribute("active", "");
        btnMenu.removeAttribute("active");
        btnContact.removeAttribute("active");
		document.getElementById("content").innerHTML = homeContent;
	}
}
