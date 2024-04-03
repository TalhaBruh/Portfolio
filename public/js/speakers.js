// speakers section

const speakersContainer = document.getElementById('speakers-card-container');
const speakersBtn = document.getElementById('speakers-btn');
let speakerShowMore = false;

const speakersList = [
  {
    id: 0,
    speakerImageUrl: './public/images/babar.png',
    Player: 'Babar Azam',
    Position: 'Captain of Pakistan',
    Description: 'Rated as #1 T20 batsman Since 2018',
  },
  {
    id: 1,
    speakerImageUrl: './public/images/viratkohli.png',
    Player: 'Virat Kohli',
    Position: 'Captain of India',
    Description: 'Most Centuries in ODI surpassing Sachin Tendulkar',
  },
  {
    id: 2,
    speakerImageUrl: './public/images/cg.png',
    Player: 'Chris Gayle',
    Position: 'Captain of WestIndies',
    Description: 'Most Sixes in ODI History',
  },
  {
    id: 3,
    speakerImageUrl: './public/images/stevesmith.png',
    Player: 'Steve Smith',
    Position: 'Captain of Autralia',
    Description: 'Leading his team to a 3rd T20 WorldCup',
  },
  {
    id: 4,
    speakerImageUrl: './public/images/ross.png',
    Player: 'Ross taylor',
    Position: 'Captain of NewZeland',
    Description: 'Most enior Player in the Hostory of Cricket',
  },
  {
    id: 5,
    speakerImageUrl: './public/images/abde.png',
    Player: 'AB de Villers',
    Position: 'Captain of South Africa',
    Description: 'Fastest Century in Mens ODI',
  },
];

const generateSpeakers = (n = 2) => {
  let speakerCardGenerator = '';
  for (let i = 0; i < n; i += 1) {
    speakerCardGenerator += `
  <!-- speakers card ${speakersList[i].id} -->
  <div class="speakers-card relative grid grid-cols-3 items-center gap-6">
    <div class="speakers-card-img-wrapper relative flex max-w-fit items-center justify-end">
      <img
        src="${speakersList[i].speakerImageUrl}"
        alt="speaker-${speakersList[i].id}: ${speakersList[i].Player}"
        class="speakers-card-img relative w-full"
      />
    </div>
    <div class="speakers-card-content flex col-span-2  flex-col gap-2">
      <h3 class="speakers-card-title font-bold speakers-head text-metal-grey">
        ${speakersList[i].Player}
      </h3>
      <p class="speakers-card-subtitle speakers-sup italic leading-6 tracking-wide text-coral-red">
        ${speakersList[i].Position}
      </p>
      <p class="speakers-card-text speakers-p text-metal-grey">
      ${speakersList[i].Description}
      </p>
    </div>
  </div>
`;
  }
  speakersContainer.innerHTML = speakerCardGenerator;
};

const speakersBtnToggle = () => {
  const speakersBtnAngle = document.querySelector('#speakers-btn > i');
  const speakersBtnText = document.querySelector('#speakers-btn > span');
  if (!speakerShowMore) {
    generateSpeakers(2);
    speakersBtnAngle.classList.toggle('rotate-180');
    speakerShowMore = true;
    speakersBtnText.innerText = 'SHOW MORE';
  } else {
    speakersBtnAngle.classList.toggle('rotate-180');
    generateSpeakers(6);
    speakerShowMore = false;
    speakersBtnText.innerText = 'SHOW LESS';
  }
  console.log(speakersBtnText.innerText);
};

const showSpeakers = () => {
  const w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 767) {
    speakersBtnToggle();
  } else {
    generateSpeakers(6);
  }
};

window.addEventListener('load', () => {
  showSpeakers();
});

window.addEventListener('resize', () => {
  showSpeakers();
});

speakersBtn.addEventListener('click', speakersBtnToggle);