const DATES = {
  firstCall: new Date("June 22, 2026 00:00:00"),
  abstractDeadline: new Date("July 22, 2026 23:59:59"),
  acceptanceNotification: new Date("October 01, 2026 00:00:00"),
  camready: new Date("October 15, 2026 23:59:59"),
  registrationsOpen: new Date("October 22, 2026 00:00:00"),
  posterDate: new Date("November 04, 2026 00:00:00"),
  conferenceDate: new Date("November 26, 2026 00:00:00")
};

const milestones = [
  { title: "First Call for Abstracts", date: DATES.firstCall },
  { title: "Deadline for Abstract Submission", date: DATES.abstractDeadline },
  { title: "Acceptance Notification", date: DATES.acceptanceNotification },
  { title: "Camera-Ready Abstract Deadline", date: DATES.camready },
  { title: "Registrations Open", date: DATES.registrationsOpen },
  { title: "Poster Session Date", date: DATES.posterDate },
  { title: "Conference Date", date: DATES.conferenceDate }
];



function updateSubmissionButton() {
  const now = new Date();

  const btn = document.getElementById("submission-btn");

  if (!btn) return;

  if (now <= DATES.abstractDeadline) {
    btn.style.display = "inline-block";
    btn.textContent = "Submit the Abstract";
    btn.href = "https://cmt3.research.microsoft.com/YSCMR2026";
  }
  else if (now <= DATES.camready) {
    btn.style.display = "inline-block";
    btn.textContent = "Submit the Poster";
    btn.href = "https://cmt3.research.microsoft.com/YSCMR2026";
  }
  else {
    btn.style.display = "none";
  }
}


function updateAbstractButton() {
  const now = new Date();

  const btn = document.getElementById("abstract-btn");
  


  // Abstract button

  if (btn && now < DATES.firstCall) {
    btn.textContent = "Await!";
    btn.href = "";
    btn.style.backgroundColor = "green";
    btn.style.pointerEvents = "none";
    btn.style.cursor = "not-allowed";
  }

  else if (btn && now > DATES.abstractDeadline) {
    btn.textContent = "Deadline Reached";
    btn.href = "";
    btn.style.backgroundColor = "red";
    btn.style.pointerEvents = "none";
    btn.style.cursor = "not-allowed";
  }

  function disableButton(btn, text, color) {
  if (!btn) return;

  btn.textContent = text;
  btn.href = "";
  btn.style.backgroundColor = color;
  btn.style.pointerEvents = "none";
  btn.style.cursor = "not-allowed";
}

  
  const posterButtons = [
  "poster-btn",
  "camreadyguidlines",
  "camreadytemplate",
  "postemplate"
  
];

posterButtons.forEach(id => {
  const btn = document.getElementById(id);

  if (now < DATES.acceptanceNotification) {
    disableButton(btn, "Await!", "green");
  }
  else if (now > DATES.camready) {
    disableButton(btn, "Deadline Reached", "red");
  }
});





}


let currentIndex = 0;

function updateCountdown() {

  const now = new Date().getTime();
  const targetDate = milestones[currentIndex].date.getTime();
  const gap = targetDate - now;

  if (gap <= 0) {

    if (currentIndex < milestones.length - 1) {

      currentIndex++;

      document.getElementById("countdown-title").innerText =
        `Time left for ${milestones[currentIndex].title}`;

      return;

    } else {

      document.getElementById("countdown-title").innerText =
        /*`The (${milestones[currentIndex].title}) has started.`;*/
        `The Conference has started.`;

      document.getElementById("countdown").style.display = "none";

      clearInterval(timer);

      return;
    }
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText =
    days.toString().padStart(2, '0');

  document.getElementById("hours").innerText =
    hours.toString().padStart(2, '0');

  document.getElementById("minutes").innerText =
    minutes.toString().padStart(2, '0');

  document.getElementById("seconds").innerText =
    seconds.toString().padStart(2, '0');

  updateSubmissionButton();
  updateAbstractButton();
}


document.getElementById("countdown-title").innerText =
  `Time left for ${milestones[0].title}`;

updateSubmissionButton();
updateAbstractButton();
updateCountdown();

const timer = setInterval(updateCountdown, 1000);


const navLinks = document.getElementById('mobile');

function toggleMenu() {
  navLinks.classList.toggle('show');
}

function closeNav() {
  navLinks.classList.remove('show');
}

