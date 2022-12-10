import { appendHomeContent } from './home.js';
import { appendMenuContent } from './menu.js';
import { appendContactContent } from "./contact.js";
document.getElementById("home").onclick = appendHomeContent;
document.getElementById("menu").onclick = appendMenuContent;
document.getElementById("contact").onclick = appendContactContent;

appendHomeContent();