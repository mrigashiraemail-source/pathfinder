const STORAGE_KEYS = {
  users: 'localpath_users',
  session: 'localpath_session',
  profiles: 'localpath_profiles'
};

const PREDEFINED_JOBS = [
  { title: 'Frontend Developer', qualification: 'B.Tech Computer Science', skills: ['javascript', 'html', 'css', 'react'], hobbies: ['blogging', 'design'], company: 'PixelForge Labs', location: 'Bengaluru', description: 'Build responsive interfaces for modern web products.', role: 'Develop reusable UI components and optimize user experience.' },
  { title: 'Backend Developer', qualification: 'B.Tech Computer Science', skills: ['node.js', 'apis', 'sql', 'python'], hobbies: ['problem solving', 'gaming'], company: 'CoreStack Systems', location: 'Hyderabad', description: 'Create scalable services for enterprise clients.', role: 'Design APIs, data models, and secure backend architecture.' },
  { title: 'Data Analyst', qualification: 'B.Sc Statistics', skills: ['excel', 'sql', 'python', 'power bi'], hobbies: ['research', 'reading'], company: 'InsightArc Pvt Ltd', location: 'Pune', description: 'Transform raw datasets into useful business insights.', role: 'Build dashboards and prepare trend reports for stakeholders.' },
  { title: 'Digital Marketing Associate', qualification: 'BBA', skills: ['seo', 'content writing', 'social media'], hobbies: ['blogging', 'photography'], company: 'ReachHive Media', location: 'Mumbai', description: 'Run campaigns to improve brand visibility online.', role: 'Plan ads, optimize SEO, and engage audience channels.' },
  { title: 'Graphic Designer', qualification: 'Bachelor of Design', skills: ['photoshop', 'illustrator', 'branding'], hobbies: ['drawing', 'design'], company: 'ArtMint Creative', location: 'Delhi', description: 'Design creative assets for social and print campaigns.', role: 'Create brand kits, banners, and campaign visuals.' },
  { title: 'Mechanical Design Engineer', qualification: 'B.Tech Mechanical', skills: ['autocad', 'solidworks', 'manufacturing'], hobbies: ['model making', 'robotics'], company: 'TorqueNova Industries', location: 'Chennai', description: 'Draft industrial machine components for production.', role: 'Prepare CAD models and coordinate with manufacturing teams.' },
  { title: 'Civil Site Engineer', qualification: 'B.Tech Civil', skills: ['site planning', 'autocad', 'project management'], hobbies: ['travel', 'photography'], company: 'UrbanStone Infra', location: 'Ahmedabad', description: 'Manage construction site schedules and quality.', role: 'Inspect site execution and coordinate contractors.' },
  { title: 'UI/UX Designer', qualification: 'Bachelor of Design', skills: ['figma', 'wireframing', 'prototyping'], hobbies: ['sketching', 'design'], company: 'FlowNest Studios', location: 'Bengaluru', description: 'Design intuitive product experiences for apps.', role: 'Create user journeys and high-fidelity mockups.' },
  { title: 'HR Recruiter', qualification: 'MBA HR', skills: ['communication', 'screening', 'interviewing'], hobbies: ['networking', 'public speaking'], company: 'TalentBridge Co.', location: 'Noida', description: 'Source and hire candidates for multiple domains.', role: 'Manage end-to-end recruitment and onboarding.' },
  { title: 'Customer Support Executive', qualification: 'Any Graduate', skills: ['communication', 'customer service', 'crm'], hobbies: ['helping', 'reading'], company: 'CareOrbit Solutions', location: 'Kolkata', description: 'Handle customer queries and improve satisfaction.', role: 'Resolve tickets and provide product guidance.' },
  { title: 'Content Writer', qualification: 'BA English', skills: ['content writing', 'editing', 'seo'], hobbies: ['reading', 'blogging'], company: 'WordWeave Content', location: 'Jaipur', description: 'Write SEO-friendly articles and website copy.', role: 'Research topics and publish engaging content.' },
  { title: 'School Teacher', qualification: 'B.Ed', skills: ['teaching', 'lesson planning', 'communication'], hobbies: ['teaching', 'crafts'], company: 'BrightMinds School', location: 'Lucknow', description: 'Teach students and manage classroom learning.', role: 'Deliver lessons and evaluate student performance.' },
  { title: 'Fitness Trainer', qualification: 'Diploma in Fitness', skills: ['fitness', 'nutrition', 'motivation'], hobbies: ['sports', 'gym'], company: 'PulseFit Studio', location: 'Indore', description: 'Guide clients to achieve fitness goals.', role: 'Plan workouts and monitor progress.' },
  { title: 'Video Editor', qualification: 'Any Graduate', skills: ['premiere pro', 'after effects', 'storytelling'], hobbies: ['videography', 'cinema'], company: 'ClipCraft Media', location: 'Mumbai', description: 'Edit promotional and storytelling videos.', role: 'Assemble footage, effects, and sound into polished videos.' },
  { title: 'Sales Executive', qualification: 'B.Com', skills: ['sales', 'negotiation', 'communication'], hobbies: ['networking', 'travel'], company: 'MarketSpring Ventures', location: 'Surat', description: 'Expand client base and close sales targets.', role: 'Meet leads, present offerings, and manage follow-ups.' },
  { title: 'Nurse Assistant', qualification: 'Diploma Nursing', skills: ['patient care', 'first aid', 'record keeping'], hobbies: ['helping', 'reading'], company: 'WellCare Hospital', location: 'Bhopal', description: 'Support nurses in patient monitoring and care.', role: 'Assist treatment routines and maintain records.' },
  { title: 'Lab Technician', qualification: 'B.Sc Biology', skills: ['lab testing', 'microscopy', 'documentation'], hobbies: ['research', 'science clubs'], company: 'BioQuest Diagnostics', location: 'Patna', description: 'Conduct routine lab tests and sample analysis.', role: 'Operate lab instruments and prepare reports.' },
  { title: 'Event Coordinator', qualification: 'Any Graduate', skills: ['event planning', 'vendor management', 'budgeting'], hobbies: ['organizing', 'music'], company: 'SparkAura Events', location: 'Goa', description: 'Plan and execute corporate and social events.', role: 'Coordinate vendors, schedules, and client requirements.' },
  { title: 'Agriculture Field Officer', qualification: 'B.Sc Agriculture', skills: ['crop management', 'soil testing', 'communication'], hobbies: ['gardening', 'farming'], company: 'GreenHarvest Co-op', location: 'Nagpur', description: 'Support farmers with modern cultivation practices.', role: 'Visit fields, provide recommendations, and monitor outputs.' },
  { title: 'Mobile App Tester', qualification: 'BCA', skills: ['manual testing', 'bug reporting', 'android'], hobbies: ['gaming', 'problem solving'], company: 'AppSure Technologies', location: 'Coimbatore', description: 'Test mobile applications for usability and bugs.', role: 'Run test cases and collaborate with developers for fixes.' }
];

function getData(key, fallback) {
  return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getSessionUser() {
  return localStorage.getItem(STORAGE_KEYS.session);
}

function requireLogin() {
  if (!getSessionUser()) {
    window.location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.session);
  window.location.href = 'login.html';
}

function initAuthPage() {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  const signupForm = document.getElementById('signupForm');
  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const authMessage = document.getElementById('authMessage');

  const showLogin = () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    authMessage.textContent = '';
  };

  const showSignup = () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    authMessage.textContent = '';
  };

  loginTab.addEventListener('click', showLogin);
  signupTab.addEventListener('click', showSignup);

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const name = formData.get('name').toString().trim();
    const email = formData.get('email').toString().trim().toLowerCase();
    const password = formData.get('password').toString();

    const users = getData(STORAGE_KEYS.users, []);
    if (users.some((user) => user.email === email)) {
      authMessage.textContent = 'Account already exists. Please log in.';
      return;
    }

    users.push({ name, email, password });
    setData(STORAGE_KEYS.users, users);
    authMessage.textContent = 'Signup successful! Please log in.';
    signupForm.reset();
    showLogin();
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const email = formData.get('email').toString().trim().toLowerCase();
    const password = formData.get('password').toString();
    const users = getData(STORAGE_KEYS.users, []);

    const found = users.find((user) => user.email === email && user.password === password);
    if (!found) {
      authMessage.textContent = 'Invalid credentials. Please try again.';
      return;
    }

    localStorage.setItem(STORAGE_KEYS.session, found.email);
    window.location.href = 'profile.html';
  });
}

function initProfilePage() {
  const profileForm = document.getElementById('profileForm');
  if (!profileForm) return;
  requireLogin();

  const users = getData(STORAGE_KEYS.users, []);
  const email = getSessionUser();
  const user = users.find((entry) => entry.email === email);
  const profiles = getData(STORAGE_KEYS.profiles, {});
  const existing = profiles[email];

  document.getElementById('welcomeUser').textContent = user ? `Hi, ${user.name}` : 'Hi';
  document.getElementById('profileName').textContent = user ? user.name : 'Your Profile';
  document.getElementById('logoutBtn').addEventListener('click', logout);

  if (existing) {
    profileForm.qualification.value = existing.qualification;
    profileForm.skills.value = existing.skills.join(', ');
    profileForm.hobbies.value = existing.hobbies.join(', ');
    profileForm.locality.value = existing.locality;
  }

  profileForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(profileForm);

    profiles[email] = {
      qualification: formData.get('qualification').toString().trim(),
      skills: formData.get('skills').toString().split(',').map((v) => v.trim()).filter(Boolean),
      hobbies: formData.get('hobbies').toString().split(',').map((v) => v.trim()).filter(Boolean),
      locality: formData.get('locality').toString().trim()
    };

    setData(STORAGE_KEYS.profiles, profiles);
    document.getElementById('profileMessage').textContent = 'Profile saved! Redirecting to recommendations...';
    setTimeout(() => {
      window.location.href = 'results.html';
    }, 600);
  });
}

function calculateMatch(job, profile) {
  let score = 30;
  const profileSkills = profile.skills.map((s) => s.toLowerCase());
  const profileHobbies = profile.hobbies.map((h) => h.toLowerCase());

  if (job.qualification.toLowerCase() === profile.qualification.toLowerCase()) score += 25;
  else if (profile.qualification.toLowerCase().includes(job.qualification.toLowerCase()) || job.qualification === 'Any Graduate') score += 15;

  const skillHits = job.skills.filter((skill) => profileSkills.includes(skill.toLowerCase())).length;
  score += Math.min(skillHits * 8, 24);

  const hobbyHits = job.hobbies.filter((hobby) => profileHobbies.includes(hobby.toLowerCase())).length;
  score += Math.min(hobbyHits * 6, 12);

  if (job.location.toLowerCase().includes(profile.locality.toLowerCase()) || profile.locality.toLowerCase().includes(job.location.toLowerCase())) {
    score += 9;
  }

  return Math.min(score, 99);
}

function mapEmbed(location) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=11&ie=UTF8&iwloc=&output=embed`;
}

function initResultsPage() {
  const jobsContainer = document.getElementById('jobsContainer');
  if (!jobsContainer) return;
  requireLogin();

  document.getElementById('logoutBtn').addEventListener('click', logout);
  const email = getSessionUser();
  const profiles = getData(STORAGE_KEYS.profiles, {});
  const users = getData(STORAGE_KEYS.users, []);
  const user = users.find((entry) => entry.email === email);
  const profile = profiles[email];

  if (!profile) {
    window.location.href = 'profile.html';
    return;
  }

  const rankedJobs = PREDEFINED_JOBS.map((job) => ({ ...job, match: calculateMatch(job, profile) }))
    .sort((a, b) => b.match - a.match);

  const summary = document.getElementById('resultSummary');
  summary.innerHTML = `
    <h2>${user ? user.name : 'User'}, here are your best local matches</h2>
    <p><strong>Qualification:</strong> ${profile.qualification} | <strong>Skills:</strong> ${profile.skills.join(', ')} | <strong>Hobbies:</strong> ${profile.hobbies.join(', ')}</p>
    <p>Showing ${rankedJobs.length} predefined job opportunities.</p>
  `;

  jobsContainer.innerHTML = rankedJobs.map((job) => `
    <article class="job-card">
      <h3>${job.title}</h3>
      <span class="match">${job.match}% Match</span>
      <p><strong>Description:</strong> ${job.description}</p>
      <p><strong>Role:</strong> ${job.role}</p>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <iframe loading="lazy" src="${mapEmbed(job.location)}"></iframe>
    </article>
  `).join('');
}

initAuthPage();
initProfilePage();
initResultsPage();
