import "../app.css";
import Alpine from "alpinejs";
import quizData from "./quizdata.js";

window.Alpine = Alpine;

Alpine.data("quizData", quizData);
Alpine.start();
