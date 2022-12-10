const contactContent = `<p>📞 +1 440-853-1332</p>
                        <br />
                        <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
                        <br />
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48827630.31041064!2d-153.00119889999996!3d41.672979699999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831a571658555f5%3A0xf537ae48f0636e90!2sIchiraku%20Ramen!5e0!3m2!1sen!2seg!4v1670690276678!5m2!1sen!2seg"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>`;

export function appendContactContent() {
	document.getElementById("content").innerHTML = contactContent;
}
