import WorkoutTracker from "/wk.js"

const app = document.getElementById("app");

const wt = new WorkoutTracker(app);

window.wt = wt;