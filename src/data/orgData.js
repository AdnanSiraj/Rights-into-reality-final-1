// Central place for real organization data.
// Update these values as new numbers/content become available —
// every page that displays them pulls from here.

export const contactInfo = {
  email: 'info@rightsintoreality.org',
  whatsapp: '+92 308 8121422',
  whatsappLink: 'https://wa.me/923088121422',
  address: 'Khwazakhela, Swat, Khyber Pakhtunkhwa, Pakistan',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Khwazakhela,+Swat,+Khyber+Pakhtunkhwa,+Pakistan&output=embed',
};

export const impactStats = {
  since: 'Feb 2026',
  studentsReached: 62,
  treesPlanted: 80,
  workshopsConducted: 3,
  communityMembersEngaged: 28,
  schoolsPartnered: [
    'Abdali Public School',
    'Global International School',
    'Golden Middle Public School',
  ],
};

export const teamMembers = [
  {
    name: 'Adnan Siraj',
    role: 'Co-Founder & President',
    photo: '/team/member-1.jpg',
    bio: 'Adnan Siraj is a legal researcher specializing in International Humanitarian Law and Human Rights Law, with multiple peer-reviewed publications and research experience at the ICRC Regional Office in Jakarta. He is also the Founder of The Handshake Initiative, a youth-led NGO working across Pakistan, Indonesia, and The Gambia.',
    cv: '/team/cv/adnan-siraj-cv.pdf',
  },
  {
    name: 'Nasar Shah Mian',
    role: 'Co-Founder & Administrator',
    photo: '/team/member-2.jpg',
    bio: 'A young environmental scientist with a research background in waste-to-energy, passionate about transforming environmental challenges into practical solutions and empowering communities for sustainable development. Digitally literate, with a one-year Diploma in Information Technology and an IELTS Academic Band 7.0.',
    cv: '/team/cv/nasar-shah-mian-cv.pdf',
  },
  {
    name: 'Jamshaid Ahmed',
    role: 'General Secretary',
    photo: '/team/member-3.jpg',
    bio: "Jamshaid Ahmed holds a Bachelor's in Economics and brings experience from serving in various organizations. As General Secretary, he supports the day-to-day coordination and organizational functions of Rights Into Reality.",
    cv: '/team/cv/jamshaid-ahmed-cv.pdf',
  },
  {
    name: 'Kamran Shah',
    role: 'Project Coordinator',
    photo: '/team/member-4.jpg',
    bio: "Kamran Shah holds a Bachelor's in Economics and brings several years of teaching experience. As Project Coordinator, he oversees the planning and execution of the organization's on-ground initiatives.",
    cv: null,
  },
];

export const testimonials = [
  {
    name: 'Raza Ullah',
    role: 'Principal, Abdali Public School',
    quote:
      'Rights Into Reality Organization brought real value to our students through their workshops on climate change, legal rights, and digital literacy. Their team communicated complex topics in a way our students could genuinely understand and engage with, and the community service component helped instill a sense of civic responsibility in them from an early age. We are grateful for their commitment to educating young people in our community and look forward to continued collaboration.',
    photo: null,
  },
  {
    name: 'Muhammad Bilal',
    role: 'Principal, Global International School',
    quote:
      'We were impressed by the professionalism and dedication the Rights Into Reality team brought to our school. Their sessions on legal rights and digital literacy gave our students practical knowledge they can carry with them well beyond the classroom, while the climate change and community service discussions encouraged them to think about their role as responsible citizens. It was a pleasure hosting them, and we hope to welcome them back for future programs.',
    photo: null,
  },
  {
    name: 'Muhammad Kameen Khan',
    role: 'Ex-District Education Officer, Swat',
    quote:
      'Having served for years in the education sector, I have seen many organizations come and go, but few have shown the genuine commitment to rural communities that Rights Into Reality Organization has demonstrated. Their work in education, legal awareness, and community service reflects a real understanding of what our villages need to grow and develop. As a member of this community, I am proud to see our young people leading such meaningful change, and I fully support their continued efforts.',
    photo: null,
  },
  {
    name: 'Zahir Shah Khan',
    role: 'Ex-Forest Officer',
    quote:
      'In my years working in forestry, I have witnessed the steady loss of green cover in our region and the environmental challenges that follow. It is encouraging to see young people from Rights Into Reality Organization taking initiative through their plantation drives, working with genuine dedication to restore the natural balance in our area. Their efforts in environmental conservation deserve recognition and support, and I hope more of our youth follow their example.',
    photo: null,
  },
];

// Four headline activities shown on the Home page (two per row),
// each linking to its section on the full Activities page.
export const featuredActivities = [
  {
    slug: 'legal-rights-workshops',
    icon: '⚖️',
    title: 'Legal Rights Workshops',
    summary:
      'Interactive school sessions breaking down human rights and legal literacy for students at Abdali Public School, Global International School, and Golden Middle Public School.',
  },
  {
    slug: 'climate-change-education',
    icon: '🌍',
    title: 'Climate Change Education',
    summary:
      'Workshops helping students understand climate change and their role in building a more resilient, sustainable Swat.',
  },
  {
    slug: 'digital-literacy-sessions',
    icon: '💻',
    title: 'Digital Literacy Sessions',
    summary:
      'Practical digital skills and online-safety training so students can navigate technology safely and confidently.',
  },
  {
    slug: 'tree-plantation-drives',
    icon: '🌱',
    title: 'Tree Plantation Drives',
    summary:
      'Community plantation drives that have put 80 trees in the ground so far, restoring green cover across Upper Swat.',
  },
];

// Full activity write-ups for the dedicated Activities page.
export const allActivities = [
  {
    slug: 'legal-rights-workshops',
    icon: '⚖️',
    title: 'Legal Rights Workshops',
    description:
      'We ran interactive legal-rights workshops at Abdali Public School, Global International School, and Golden Middle Public School, helping students understand their fundamental rights and how the law protects them. Sessions used real-world scenarios and discussion rather than lectures, so students left with knowledge they could actually apply.',
    stat: `${impactStats.studentsReached} students reached`,
  },
  {
    slug: 'climate-change-education',
    icon: '🌍',
    title: 'Climate Change Education',
    description:
      'Alongside the legal rights sessions, we delivered climate change workshops explaining the science of a warming climate and, more importantly, what students and their communities can do about it — from reducing waste to protecting green spaces.',
    stat: `${impactStats.workshopsConducted} workshops conducted since ${impactStats.since}`,
  },
  {
    slug: 'digital-literacy-sessions',
    icon: '💻',
    title: 'Digital Literacy Sessions',
    description:
      'Our digital literacy sessions cover safe and responsible technology use, from basic computer skills to online safety, giving students practical tools for a digitally connected world.',
    stat: `${impactStats.communityMembersEngaged} community members engaged`,
  },
  {
    slug: 'tree-plantation-drives',
    icon: '🌱',
    title: 'Tree Plantation Drives',
    description:
      'Since February 2026, our volunteers have led community tree plantation drives across Upper Swat, putting 80 trees in the ground so far and building local awareness of reforestation and land stewardship.',
    stat: `${impactStats.treesPlanted} trees planted since ${impactStats.since}`,
  },
];
