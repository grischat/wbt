// Description: This file contains the logic for changing the language on the website.

const translations = {
  ru: {
    academy: "Академия Бокса",
    team: "WARSAW BOXING TEAM",
    description:
      "Место силы, в котором каждый развивается не только физически но и духовно, пространство где каждый может раскрыть свой потенциал и стать частью семьи.",
    mainHeader: "Становись лучше с WARSAW BOXING TEAM",
    groupTrainings: "Абонементы групповых тренировок",
    adultGroup: "Взрослая группа :",
    adultGroupPrices:
      "4 входа - 140 PLN<br>8 входов - 220 PLN<br>12 входов - 260 PLN<br>Безлимитный - 300 PLN<br>Разовый вход - 40 PLN",
    kidsGroup: "Детская группа :",
    kidsGroupPrices:
      "Пробная тренировка бесплатно<br>Месяц - 220 PLN (без лимита)<br>Разовый вход - 40 PLN",
    individualTraining: "Индивидуальная тренировка - 170 PLN",
    gymEntry: "Свободный вход в зал (без групп) - 10 входов - 220 PLN",
    openPlan: "Open (группы + свободный вход без лимита) - 400 PLN",
    schedule: "Расписание тренировок",
    scheduleDetails: {
      mondayWednesdayFriday: "Понедельник / Среда / Пятница",
      tuesdayThursday: "Вторник / Четверг",
      saturday: "Суббота",
      gymHours: "Время работы зала",
      mondayFriday: "Понедельник - Пятница",
      time: "Время",
      trainer: "Тренер",
      group: "Группа",
      sparring: "Спарринг",
      kidsYoung: "Дети (5 - 9 лет)",
      kidsOlder: "Дети (10 - 15 лет)",
      adultsBoxing: "Взрослые (Техника бокса)",
      adultsBoxingCrossfit: "Взрослые (Боксерский кроссфит)",
      stretching: "Стретчинг",
      adultsBeginners: "Взрослые (Для новичков)",
      adultsAdvanced: "Взрослые (Продвинутая)",
      adultsMixed: "Взрослые (Смешанная)",
      openRing: "Открытый ринг",
      workingHours: {
        weekdays: "7:30 - 22:00",
        saturday: "7:30 - 16:00",
      },
      trainers: {
        romanBorisov: "Роман Борисов",
        daniilGolikov: "Даниил Голиков",
        dmitryKaida: "Дмитрий Кайда",
        alexandraLitvyak: "Александра Литвяк",
        alexeyPolukhin: "Алексей Полухин",
        andreyYuldashev: "Андрей Юлдашев",
      },
    },
    gymHours: {
      header: "Время работы зала",
      schedule: {
        weekdays: "Понедельник - Пятница: 7:30 - 22:00",
        saturday: "Суббота: 7:30 - 16:00",
      },
    },
    massage: "Массаж",
    massageText1:
      "Добро пожаловать в наш массажный кабинет - место, где каждый сеанс превращается в искусство восстановления и релаксации",
    massageText2:
      "Классический, лечебный, изометрический, массаж мёдом, инструментальная терапия мышц, краниосокральная терапия и другие техники массажа",
    massagePrice: "Цена одного сеанса - 170 PLN",
    ourTeam: "Наша команда",
    teamMembers: {
      andriyYuldashev: "Андрей Юлдашев",
      fuadValiev: "Фуад Валиев",
      yuriGrats: "Юрий Грац",
      dmytroKaida: "Дмитрий Кайда",
      daniilGolikov: "Даниил Голиков",
      alekseiPalukhin: "Алексей Полухин",
    },
    photoGalleryHeader: "Бокс в каждом жизненном шаге",
    contacts: "Контакты",
    address: "Warszawa, Mokotów,<br>Postępu 19/5",
  },
  pl: {
    academy: "Akademia Boksu",
    team: "WARSAW BOXING TEAM",
    description:
      "Miejsce mocy, w którym każdy rozwija się nie tylko fizycznie, ale i duchowo, przestrzeń, w której każdy może odkryć swój potencjał i stać się częścią rodziny.",
    mainHeader: "Stań się lepszy z WARSAW BOXING TEAM",
    groupTrainings: "Abonamenty treningów grupowych",
    adultGroup: "Grupa dorosłych:",
    adultGroupPrices:
      "4 wejścia - 140 PLN<br>8 wejść - 220 PLN<br>12 wejść - 260 PLN<br>Bez limitu - 300 PLN<br>Pojedyncze wejście - 40 PLN",
    kidsGroup: "Grupa dziecięca:",
    kidsGroupPrices:
      "Trening próbny za darmo<br>Miesiąc - 220 PLN (bez limitu)<br>Pojedyncze wejście - 40 PLN",
    individualTraining: "Trening indywidualny - 170 PLN",
    gymEntry: "Wolne wejście na siłownię (bez grup) - 10 wejść - 220 PLN",
    openPlan: "Open (grupy + wolne wejście bez limitu) - 400 PLN",
    schedule: "Harmonogram treningów",
    scheduleDetails: {
      mondayWednesdayFriday: "Poniedziałek / Środa / Piątek",
      tuesdayThursday: "Wtorek / Czwartek",
      saturday: "Sobota",
      gymHours: "Godziny otwarcia",
      mondayFriday: "Poniedziałek - Piątek",
      time: "Czas",
      trainer: "Trener",
      group: "Grupa",
      sparring: "Sparring",
      kidsYoung: "Dzieci (5 - 9 lat)",
      kidsOlder: "Dzieci (10 - 15 lat)",
      adultsBoxing: "Dorośli (Technika boksu)",
      adultsBoxingCrossfit: "Dorośli (Boks crossfit)",
      stretching: "Stretching",
      adultsBeginners: "Dorośli (Dla początkujących)",
      adultsAdvanced: "Dorośli (Zaawansowana)",
      adultsMixed: "Dorośli (Mieszana)",
      openRing: "Otwarty ring",
      workingHours: {
        weekdays: "7:30 - 22:00",
        saturday: "7:30 - 16:00",
      },
      trainers: {
        romanBorisov: "Roman Borisov",
        daniilGolikov: "Daniil Golikov",
        dmitryKaida: "Dmitry Kaida",
        alexandraLitvyak: "Alexandra Litvyak",
        alexeyPolukhin: "Alexey Polukhin",
        andreyYuldashev: "Andrey Yuldashev",
      },
    },
    gymHours: {
      header: "Godziny otwarcia",
      schedule: {
        weekdays: "Poniedziałek - Piątek: 7:30 - 22:00",
        saturday: "Sobota: 7:30 - 16:00",
      },
    },
    massage: "Masaż",
    massageText1:
      "Witamy w naszym gabinecie masażu - miejscu, gdzie każda sesja staje się sztuką regeneracji i relaksu",
    massageText2:
      "Masaż klasyczny, leczniczy, izometryczny, miodowy, terapia instrumentalna mięśni, terapia kraniosakralna i inne techniki masażu",
    massagePrice: "Cena jednej sesji - 170 PLN",
    ourTeam: "Nasz zespół",
    teamMembers: {
      andriyYuldashev: "Andriy Yuldashev",
      fuadValiev: "Fuad Valiev",
      yuriGrats: "Yuri Grats",
      dmytroKaida: "Dmytro Kaida",
      daniilGolikov: "Daniil Golikov",
      alekseiPalukhin: "Aleksei Palukhin",
    },
    photoGalleryHeader: "Boks w każdym kroku życia",
    contacts: "Kontakty",
    address: "Warszawa, Mokotów,<br>Postępu 19/5",
  },
  en: {
    academy: "Boxing Academy",
    team: "WARSAW BOXING TEAM",
    description:
      "A place of power where everyone develops not only physically but also spiritually, a space where everyone can unlock their potential and become part of the family.",
    mainHeader: "Become Better with WARSAW BOXING TEAM",
    groupTrainings: "Group Training Subscriptions",
    adultGroup: "Adult Group:",
    adultGroupPrices:
      "4 entries - 140 PLN<br>8 entries - 220 PLN<br>12 entries - 260 PLN<br>Unlimited - 300 PLN<br>Single entry - 40 PLN",
    kidsGroup: "Kids Group:",
    kidsGroupPrices:
      "Free trial training<br>Month - 220 PLN (unlimited)<br>Single entry - 40 PLN",
    individualTraining: "Individual training - 170 PLN",
    gymEntry: "Free gym entry (no groups) - 10 entries - 220 PLN",
    openPlan: "Open (groups + unlimited free entry) - 400 PLN",
    schedule: "Training Schedule",
    scheduleDetails: {
      mondayWednesdayFriday: "Monday / Wednesday / Friday",
      tuesdayThursday: "Tuesday / Thursday",
      saturday: "Saturday",
      gymHours: "Gym Hours",
      mondayFriday: "Monday - Friday",
      time: "Time",
      trainer: "Trainer",
      group: "Group",
      sparring: "Sparring",
      kidsYoung: "Kids (5 - 9 years)",
      kidsOlder: "Kids (10 - 15 years)",
      adultsBoxing: "Adults (Boxing Technique)",
      adultsBoxingCrossfit: "Adults (Boxing Crossfit)",
      stretching: "Stretching",
      adultsBeginners: "Adults (For Beginners)",
      adultsAdvanced: "Adults (Advanced)",
      adultsMixed: "Adults (Mixed)",
      openRing: "Open Ring",
      workingHours: {
        weekdays: "7:30 - 22:00",
        saturday: "7:30 - 16:00",
      },
      trainers: {
        romanBorisov: "Roman Borisov",
        daniilGolikov: "Daniil Golikov",
        dmitryKaida: "Dmitry Kaida",
        alexandraLitvyak: "Alexandra Litvyak",
        alexeyPolukhin: "Alexey Polukhin",
        andreyYuldashev: "Andrey Yuldashev",
      },
    },
    gymHours: {
      header: "Gym Hours",
      schedule: {
        weekdays: "Monday - Friday: 7:30 - 22:00",
        saturday: "Saturday: 7:30 - 16:00",
      },
    },
    massage: "Massage",
    massageText1:
      "Welcome to our massage room - a place where each session becomes an art of recovery and relaxation",
    massageText2:
      "Classical, therapeutic, isometric, honey massage, instrumental muscle therapy, craniosacral therapy and other massage techniques",
    massagePrice: "Price per session - 170 PLN",
    ourTeam: "Our Team",
    teamMembers: {
      andriyYuldashev: "Andriy Yuldashev",
      fuadValiev: "Fuad Valiev",
      yuriGrats: "Yuri Grats",
      dmytroKaida: "Dmytro Kaida",
      daniilGolikov: "Daniil Golikov",
      alekseiPalukhin: "Aleksei Palukhin",
    },
    photoGalleryHeader: "Boxing in every life step",
    contacts: "Contacts",
    address: "Warsaw, Mokotów,<br>Postępu 19/5",
  },
};

function initializeLanguage() {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "ru";
  changeLanguage(savedLanguage);
  console.log(window.innerWidth);
}

// Add event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize language
  initializeLanguage();

  // Add click event listeners to language buttons
  const langButtons = document.querySelectorAll(".lang-button");
  langButtons.forEach((button) => {
    button.onclick = function () {
      changeLanguage(this.textContent.toLowerCase());
    };
  });
});

// Update the changeLanguage function to include the new translations:
function updateGymHours(lang) {
  const gymHoursHeader = document.querySelector(".working-hours h3");
  const gymHoursSchedule = document.querySelector(".working-hours ul");

  if (gymHoursHeader) {
    gymHoursHeader.textContent = translations[lang].gymHours.header;
  }

  if (gymHoursSchedule) {
    gymHoursSchedule.innerHTML = `
        <li>${translations[lang].gymHours.schedule.weekdays}</li>
        <br />
        <li>${translations[lang].gymHours.schedule.saturday}</li>
      `;
  }
}

function updateScheduleSection(lang) {
  // Update day headers
  const scheduleHeaders = document.querySelectorAll(".section-schedule h2");
  scheduleHeaders.forEach((header) => {
    if (header.textContent.includes("Понедельник / Среда / Пятница")) {
      header.textContent =
        translations[lang].scheduleDetails.mondayWednesdayFriday;
    } else if (header.textContent.includes("Вторник / Четверг")) {
      header.textContent = translations[lang].scheduleDetails.tuesdayThursday;
    } else if (header.textContent === "Суббота") {
      header.textContent = translations[lang].scheduleDetails.saturday;
    }
  });

  // Update labels and values
  document.querySelectorAll(".section-schedule strong").forEach((label) => {
    switch (label.textContent.replace(":", "")) {
      case "Время":
        label.textContent = translations[lang].scheduleDetails.time + ":";
        break;
      case "Спарринг":
        label.textContent = translations[lang].scheduleDetails.sparring + ":";
        break;
      case "Тренер":
        label.textContent = translations[lang].scheduleDetails.trainer + ":";
        break;
      case "Группа":
        label.textContent = translations[lang].scheduleDetails.group + ":";
        break;
    }
  });

  // Update trainer names
  document.querySelectorAll(".section-schedule span").forEach((span) => {
    const trainerName = span.textContent;
    if (trainerName === "Алексей Полухин") {
      span.textContent =
        translations[lang].scheduleDetails.trainers.alexeyPolukhin;
    } else if (trainerName === "Александра Литвяк") {
      span.textContent =
        translations[lang].scheduleDetails.trainers.alexandraLitvyak;
    } else if (trainerName === "Открытый ринг") {
      span.textContent = translations[lang].scheduleDetails.openRing;
    }
  });

  // Update group names

  if (document.getElementById("adults-beginners")) {
    beginners.textContent = translations[lang].scheduleDetails.adultsBeginners;
  }

  if (document.getElementById("stretching")) {
    stretching.textContent = translations[lang].scheduleDetails.stretching;
  }
}

// Function to change language
function changeLanguage(lang) {
  // Save selected language to localStorage
  localStorage.setItem("selectedLanguage", lang);

  // Update text content for all elements
  document.getElementById("academy").textContent = translations[lang].academy;
  document.getElementById("team").textContent = translations[lang].team;
  document.getElementById("description").innerHTML =
    translations[lang].description;
  document.getElementById("main-header").textContent =
    translations[lang].mainHeader;

  // Update all group training sections
  const groupTrainingsElements = document.querySelectorAll("#group-trainings");
  groupTrainingsElements.forEach((element) => {
    element.textContent = translations[lang].groupTrainings;
  });

  const adultGroupElements = document.querySelectorAll("#adult-group");
  adultGroupElements.forEach((element) => {
    element.textContent = translations[lang].adultGroup;
  });

  const adultGroupPricesElements = document.querySelectorAll(
    "#adult-group-prices"
  );
  adultGroupPricesElements.forEach((element) => {
    element.innerHTML = translations[lang].adultGroupPrices;
  });

  const kidsGroupElements = document.querySelectorAll("#kids-group");

  kidsGroupElements.forEach((element) => {
    element.textContent = translations[lang].kidsGroup;
  });
  const kidsGroupPricesElements =
    document.querySelectorAll("#kids-group-prices");

  kidsGroupPricesElements.forEach((element) => {
    element.innerHTML = translations[lang].kidsGroupPrices;
  });
  document.getElementById("individual-training-price").textContent =
    translations[lang].individualTraining;
  document.getElementById("gym-entry-price").textContent =
    translations[lang].gymEntry;
  document.getElementById("open-plan-price").textContent =
    translations[lang].openPlan;

  // Update massage section
  document.querySelector(".massage__header").textContent =
    translations[lang].massage;
  const massageTexts = document.querySelectorAll(".massage__text");
  massageTexts[0].textContent = translations[lang].massageText1;
  massageTexts[1].textContent = translations[lang].massageText2;

  const massagePrice = document.querySelector(".price-massage p");
  if (massagePrice) massagePrice.textContent = translations[lang].massagePrice;

  // Update team section
  document.querySelector(".wbt-team__header").textContent =
    translations[lang].ourTeam;

  // Update team member names
  const teamMembers = document.querySelectorAll(".team-member p");
  const teamMemberNames = Object.values(translations[lang].teamMembers);
  teamMembers.forEach((member, index) => {
    if (teamMemberNames[index]) member.textContent = teamMemberNames[index];
  });

  document.getElementById("photo-gallery-header").textContent =
    translations[lang].photoGalleryHeader;
  document.getElementById("contacts").textContent = translations[lang].contacts;

  // Update addresses
  const addressElements = [
    document.getElementById("address"),
    document.getElementById("footer-address"),
  ];
  addressElements.forEach((element) => {
    if (element) element.innerHTML = translations[lang].address;
  });

  //Update trainer names
  document.querySelectorAll(".section-schedule span").forEach((span) => {
    // Update trainer names if they match
    const trainerName = span.textContent;
    Object.entries(translations[lang].scheduleDetails.trainers).forEach(
      ([key, value]) => {
        if (translations["ru"].scheduleDetails.trainers[key] === trainerName) {
          span.textContent = value;
        }
      }
    );
  });
}
