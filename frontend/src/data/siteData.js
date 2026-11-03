// St. Daniel Comboni Secondary School - Comprehensive Institutional Data Store
// Juba, South Sudan

export const initialSiteData = {
  settings: {
    schoolName: "St. Daniel Comboni Secondary School",
    tagline: "Integral development and formation through formal and informal education",
    subTagline: "",
    location: "Juba, South Sudan",
    address: "[School address to be confirmed]",
    primaryPhone: "[Official phone number]",
    admissionsPhone: "[Admissions phone number]",
    primaryEmail: "[Official email address]",
    admissionsEmail: "[Admissions email address]",
    officeHours: "[Office hours to be confirmed]",
    portalUrl: "",
    applyNowUrl: "/admissions",
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    },
    hero: {
      badge: "WELCOME TO ST. DANIEL COMBONI SECONDARY SCHOOL",
      heading: "Integral Development and Formation",
      subheading: "A Catholic Archdiocese of Juba school providing academic and vocational education, with a focus on the formation of the whole person.",
      imageUrl: "",
      primaryCtaText: "Admissions Information",
      primaryCtaLink: "/admissions",
      secondaryCtaText: "Classes & Streams",
      secondaryCtaLink: "/programmes"
    }
  },

  schoolProfile: {
    established: 1981,
    history: "St. Daniel Comboni Secondary School was established in 1981 by the Comboni Missionaries, one hundred years after the death of Bishop Daniel Comboni, during the centenary anniversary of his death. Its founding aim was to equip Sudanese people with academic and vocational skills and support the Catholic Church’s evangelization work. After the Comboni Missionaries departed Juba during the liberation struggle, administration of the school was handed over to the Catholic Archdiocese of Juba.",
    aim: "to empower Sudanese people with academic and vocational skills and to expand the evangelization work of the Catholic Church.",
    vision: "Integral development and formation through formal and informal education.",
    mission: "Academic competence coupled with formation.",
    coreValues: ["Hard work", "Ambition", "Determination", "Fear of God"],
    patron: "His Eminence Stephen Ameyu Cardinal Mula, Metropolitan Archbishop of Juba",
    educationCoordinator: "Rev. Fr. David Tombe",
    academicYear: "The school follows the government calendar issued each year and designs its academic calendar from it.",
    annualEnrollment: "About 700 students",
    classes: [
      { id: "senior-1", title: "Senior 1", streams: "A, B, C and D", streamCount: 4, students: "About 300 students", note: "Four streams." },
      { id: "senior-2", title: "Senior 2", streams: "A, B and C", streamCount: 3, students: "About 200 students", note: "Three streams." },
      { id: "senior-3", title: "Senior 3", streams: "A — Science; B — Arts", streamCount: 2, students: "About 100 students", note: "Science and Arts sections." },
      { id: "senior-4", title: "Senior 4", streams: "A and B", streamCount: 2, students: "About 80 students", note: "Two streams." }
    ],
    staffing: [
      { title: "Part-time teachers", description: "Part-time teaching staff." },
      { title: "Full-time teachers", description: "Full-time teachers employed by the Church." },
      { title: "Menial and support staff", description: "Support staff serving the school community." }
    ],
    events: [
      { id: "opening-day", title: "Opening Day", day: "TBC", month: "DATE", year: "Each academic year", dateTime: "", description: "The date is set in line with the government calendar issued for the academic year." },
      { id: "cultural-day", title: "Cultural Day", day: "14", month: "AUG", year: "Annual", dateTime: "", description: "The school’s annual Cultural Day is held on 14 August." },
      { id: "comboni-day", title: "Comboni Day", day: "10", month: "OCT", year: "Annual", dateTime: "", description: "The school marks Comboni Day on 10 October." },
      { id: "closing-day", title: "Closing Day", day: "TBC", month: "DATE", year: "Each academic year", dateTime: "", description: "The date is set in line with the government calendar issued for the academic year." }
    ]
  },

  faculties: [],

  departments: [],

  programmes: [
    { id: "senior-1", slug: "senior-1", code: "S1", name: "Senior 1", faculty: "Secondary School", department: "Streams A–D", level: "Senior 1", duration: "School academic year", overview: "Senior 1 is organized into four streams: A, B, C and D.", requirements: [], curriculumSummary: "About 300 students across four streams.", careerPath: "" },
    { id: "senior-2", slug: "senior-2", code: "S2", name: "Senior 2", faculty: "Secondary School", department: "Streams A–C", level: "Senior 2", duration: "School academic year", overview: "Senior 2 is organized into three streams: A, B and C.", requirements: [], curriculumSummary: "About 200 students across three streams.", careerPath: "" },
    { id: "senior-3-science", slug: "senior-3-science", code: "S3-A", name: "Senior 3 — Science", faculty: "Secondary School", department: "Stream A", level: "Senior 3", duration: "School academic year", overview: "Senior 3 includes a Science section in Stream A.", requirements: [], curriculumSummary: "Senior 3 has two streams and about 100 students in total.", careerPath: "" },
    { id: "senior-3-arts", slug: "senior-3-arts", code: "S3-B", name: "Senior 3 — Arts", faculty: "Secondary School", department: "Stream B", level: "Senior 3", duration: "School academic year", overview: "Senior 3 includes an Arts section in Stream B.", requirements: [], curriculumSummary: "Senior 3 has two streams and about 100 students in total.", careerPath: "" },
    { id: "senior-4", slug: "senior-4", code: "S4", name: "Senior 4", faculty: "Secondary School", department: "Streams A–B", level: "Senior 4", duration: "School academic year", overview: "Senior 4 is organized into two streams: A and B.", requirements: [], curriculumSummary: "About 80 students across two streams.", careerPath: "" }
  ],

  leadership: [
    {
      name: "His Eminence Stephen Ameyu Cardinal Mula",
      role: "Patron · Metropolitan Archbishop of Juba",
      category: "School Governance",
      bio: "Patron of St. Daniel Comboni Secondary School.",
      email: ""
    },
    {
      name: "Rev. Fr. David Tombe",
      role: "Education Coordinator, Catholic Archdiocese of Juba",
      category: "School Governance",
      bio: "Supervises St. Daniel Comboni Secondary School on behalf of the Catholic Archdiocese of Juba.",
      email: ""
    },
    {
      name: "Ustaz Emmanuel Lado Zacharia",
      role: "Headmaster · Comboni alumnus",
      category: "School Administration",
      bio: "Headmaster of St. Daniel Comboni Secondary School and an alumnus of the school.",
      email: ""
    },
    {
      name: "Rev. Fr. Alfred Loro",
      role: "Deputy Headmaster",
      category: "School Administration",
      bio: "Deputy headmaster of St. Daniel Comboni Secondary School.",
      email: ""
    },
    {
      name: "Ustaz Isaac Abuni Joseph",
      role: "School Officer · Comboni alumnus",
      category: "School Administration",
      bio: "School officer and an alumnus of St. Daniel Comboni Secondary School.",
      email: ""
    },
    {
      name: "Ustaz David Lubajo",
      role: "School Secretary · Comboni alumnus",
      category: "School Administration",
      bio: "School secretary and an alumnus of St. Daniel Comboni Secondary School.",
      email: ""
    },
    {
      name: "Ustaz Rexon Surur",
      role: "Bursar",
      category: "School Administration",
      bio: "Bursar of St. Daniel Comboni Secondary School.",
      email: ""
    }
  ],

  staff: [],

  research: { overview: "Research information will be published when confirmed by the school.", areas: [], publications: [] },

  news: [],

  events: [
    { id: "opening-day", slug: "opening-day", title: "Opening Day", day: "TBC", month: "DATE", year: "Each academic year", dateTime: "", time: "To be announced", location: "To be announced", organizer: "School administration", image: "", description: "The date is set in line with the government calendar issued for the academic year." },
    { id: "cultural-day", slug: "cultural-day", title: "Cultural Day", day: "14", month: "AUG", year: "Annual", dateTime: "", time: "To be announced", location: "To be announced", organizer: "School administration", image: "", description: "The school’s annual Cultural Day is held on 14 August." },
    { id: "comboni-day", slug: "comboni-day", title: "Comboni Day", day: "10", month: "OCT", year: "Annual", dateTime: "", time: "To be announced", location: "To be announced", organizer: "School administration", image: "", description: "The school marks Comboni Day on 10 October." },
    { id: "closing-day", slug: "closing-day", title: "Closing Day", day: "TBC", month: "DATE", year: "Each academic year", dateTime: "", time: "To be announced", location: "To be announced", organizer: "School administration", image: "", description: "The date is set in line with the government calendar issued for the academic year." }
  ],

  gallery: [],

  downloads: [],

  admissions: { steps: [], faqs: [] }
};

