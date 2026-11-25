/* ==========================================================================
   Lion Borehole Drilling — Projects Data
   HOW TO ADD A NEW PROJECT:
   1. Drop the file in /assets/media/images/ or /assets/media/videos/
   2. Add one object to the PROJECTS array below.
   ========================================================================== */

const PROJECTS = [
  // ---- DRILLING ----
  {
    file:     'assets/media/images/drilling-farm-1.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Borehole drilling on a farm — water struck at depth', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-farm-2.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Drilling rig on-site at a rural property', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-commercial-1.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Commercial site drilling — mud discharge during drilling', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-commercial-2.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Large commercial borehole project in progress', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-commercial-3.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Drilling team working on a commercial site', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-commercial-4.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Multi-team commercial borehole drilling operation', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-residential-1.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Residential borehole — compact rig in tight space', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-residential-2.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Drilling at a residential property — crew on site', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-water-strike-1.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Water strike! First flow from a successful residential borehole', // TODO: add location
  },
  {
    file:     'assets/media/images/drilling-water-strike-2.jpg',
    type:     'image',
    category: 'drilling',
    caption:  'Strong water yield from borehole drilling', // TODO: add location
  },
  // ---- INSTALLATIONS ----
  {
    file:     'assets/media/images/installation-filtration-1.jpg',
    type:     'image',
    category: 'installations',
    caption:  'Full borehole water filtration system installation', // TODO: add location
  },
  {
    file:     'assets/media/images/installation-filtration-2.jpg',
    type:     'image',
    category: 'installations',
    caption:  'Multi-stage water purification and filtration setup', // TODO: add location
  },
  // ---- PUMPS & TANKS ----
  {
    file:     'assets/media/images/jojo-tank-1.jpg',
    type:     'image',
    category: 'pumps-tanks',
    caption:  'JoJo tank installation with water treatment system', // TODO: add location
  },
  {
    file:     'assets/media/images/installation-tanks-1.jpg',
    type:     'image',
    category: 'pumps-tanks',
    caption:  'Large-capacity Jojo tanks with filtration and control panels', // TODO: add location
  },
  {
    file:     'assets/media/images/pump-repair-1.jpg',
    type:     'image',
    category: 'pumps-tanks',
    caption:  'Pump servicing and water system maintenance', // TODO: add location
  },
  // ---- VIDEOS ----
  {
    file:     'assets/media/videos/drilling-action-1.mp4',
    type:     'video',
    category: 'drilling',
    caption:  'Borehole drilling in action — watch the rig at work', // TODO: add location
    poster:   'assets/media/images/drilling-farm-1.jpg',
  },
  {
    file:     'assets/media/videos/drilling-action-2.mp4',
    type:     'video',
    category: 'drilling',
    caption:  'Drilling operation — water and soil discharge on site', // TODO: add location
    poster:   'assets/media/images/drilling-commercial-1.jpg',
  },
  {
    file:     'assets/media/videos/drilling-action-3.mp4',
    type:     'video',
    category: 'drilling',
    caption:  'Full drilling process from start to water strike', // TODO: add location
    poster:   'assets/media/images/drilling-water-strike-1.jpg',
  },
  {
    file:     'assets/media/videos/installation-action-1.mp4',
    type:     'video',
    category: 'installations',
    caption:  'Borehole installation and pump setup walkthrough', // TODO: add location
    poster:   'assets/media/images/installation-filtration-1.jpg',
  },
];

window.PROJECTS = PROJECTS;
