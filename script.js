import { appendHomeContent } from './scripts/home.js';
import { appendMenuContent } from './scripts/menu.js';
import { appendContactContent } from "./scripts/contact.js";
document.getElementById("home").onclick = appendHomeContent;
document.getElementById("menu").onclick = appendMenuContent;
document.getElementById("contact").onclick = appendContactContent;

appendHomeContent();