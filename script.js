const milestones = [
    { title: "First Call for Abstracts", date: new Date("May 26, 2025 00:00:00") },
    { title: "Deadline for Abstract Submission", date: new Date("July 14, 2025 23:59:59") },
    { title: "Acceptance Notification", date: new Date("September 15, 2025 23:59:59") },
    { title: "Registrations Open", date: new Date("October 30, 2025 23:59:59") },
    { title: "Conference Date", date: new Date("November 27, 2025 00:00:00") }
  ];

  let currentIndex = 0;

  function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = milestones[currentIndex].date.getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
      // Move to next milestone if exists
      if (currentIndex < milestones.length - 1) {
        currentIndex++;
        document.getElementById("countdown-title").innerText = `Time left for ${milestones[currentIndex].title}`;
        return; // Wait for next tick to update countdown with new date
      } else {
        // If no more milestones, stop countdown
        document.getElementById("countdown-title").innerText = `The event (${milestones[currentIndex].title}) has started.`;
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

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  }

  // Initialize title on load
  document.getElementById("countdown-title").innerText = `Time left for ${milestones[0].title}`;

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();


  // const navLinks = document.getElementById('navLinks');

  // function toggleMenu() {
  //   if (navLinks.style.display === 'flex') {
  //     navLinks.style.display = 'none';
  //   } else {
  //     navLinks.style.display = 'flex';
  //   }
  // }

// const navLinks = document.getElementById('mobile');

// function toggleMenu() {
//     if(navLinks.style.display === 'none'){
//       navLinks.style.display = 'block!important'
//     }
// }


const navLinks = document.getElementById('mobile');

function toggleMenu() {
  navLinks.classList.toggle('show');
}

function closeNav() {
  navLinks.classList.remove('show');
}
