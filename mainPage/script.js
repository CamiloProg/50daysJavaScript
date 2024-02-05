const projectNames = [
  'Expanding Cards',
  'Progress Steps',
  'Rotating Navigation Animation',
  'Hidden Search Widget',
  'Blurry Loading',
  'Scroll Animation',
  'Split Landing Page',
  'Form Wave',
  'Sound Board',
  'Dad Jokes',
  'Event Keycodes',
  'Faq Collapse',
  'Random Choice Picker',
  'Animated Navigation',
  'Incrementing Counter',
  'Drink Water',
  'Movie App',
  'Background Slider',
  'Theme Clock',
  'Button Ripple Effect',
  'Drag N Drop',
  'Drawing App',
  'Kinetic Loader',
  'Content Placeholder',
  'Sticky Navbar',
  'Double Vertical Slider',
  'Toast Notification',
  'Github Profiles',
  'Double Click Heart',
  'Auto Text Effect',
  'Password Generator',
  'Good Cheap Fast',
  'Notes App',
  'Animated Countdown',
  'Image Carousel',
  'Hoverboard',
  'Pokedex',
  'Mobile Tab Navigation',
  'Password Strength Background',
  '3d Background Boxes',
  'Verify Account Ui',
  'Live User Filter',
  'Feedback Ui Design',
  'Custom Range Slider',
  'Netflix Mobile Navigation',
  'Quiz App',
  'Testimonial Box Switcher',
  'Random Image Feed',
  'Todo List',
  'Insect Catch Game'
];
const projectUrl = [
  'expandingCards',
  'progressSteps',
  'rotationNavigation',
  'hiddenSearch',
  'blurry-loading',
  'scroll-animation',
  'split-landing-page',
  'form-wave',
  'soundBoard',
  'dadJokes',
  'eventKeycodes',
  'fQuestions',
  'randomChoicer',
  'animatedNavigation',
  'incrementingCounting',
  'drinkWater',
  'movieApp',
  'backgroundSlide',
  'themeClock',
  'rippleEffect',
  'dragDrop',
  'drawingApp',
  'kineticLoader',
  'placeHolder',
  'stickyNavbar',
  'verticalSlider',
  'notifications',
  'githubProfiles',
  'doubleClickHeart',
  'autoText',
  'passwordGenerator',
  'goodCheap',
  'notesApp',
  'animatedCountdown',
  'imageCarousel',
  'hoverBoard',
  'pokedex',
  'mobileTab',
  'password',
  'backgroundBox',
  'verifyAccount'
]

const projects = Array.from({ length: 50 }, (_, index) => ({
  image: `../pictures/project_${index + 1}.PNG`,
  day: `Day ${index + 1}`,
  name: projectNames[index % projectNames.length],
  button: `../${projectUrl[index % projectUrl.length]}`
}));

const projectsContainer = document.getElementById('projects-container');

projects.forEach((project, index) => {
  // Create a project container div
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.addEventListener('mouseenter', function () {
    buttonElement.classList.add('selected')
  })
  projectDiv.addEventListener('mouseleave', function () {
    buttonElement.classList.remove('selected')
  })
  // Create HTML elements for each project property
  const imageElement = document.createElement('img');
  imageElement.src = project.image;

  const dayElement = document.createElement('p');
  dayElement.textContent = project.day;

  const nameElement = document.createElement('h2');
  nameElement.textContent = project.name;

  const buttonElement = document.createElement('a');
  buttonElement.href = project.button;
  buttonElement.textContent = 'Demo';
  buttonElement.classList.add('button');
  buttonElement.target = '_blank';
  // Append elements to the project container
  projectDiv.appendChild(imageElement);
  projectDiv.appendChild(dayElement);
  projectDiv.appendChild(nameElement);
  projectDiv.appendChild(buttonElement);

  // Append the project container to the projects container
  projectsContainer.appendChild(projectDiv);
});
