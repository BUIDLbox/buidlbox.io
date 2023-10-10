export const testimonials = [
  {
    content:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh",
    role: "Full-stack Developer",
    avatarUrl: "",
    id: 143,
  },
  {
    content:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh2",
    role: "Full-stack Developer",
    avatarUrl: "",
    id: 243,
  },
  {
    content:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh3",
    role: "Full-stack Developer",
    avatarUrl: "",
    id: 343,
  },
  {
    content:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh4",
    role: "Full-stack Developer",
    avatarUrl: "",
    id: 443,
  },
];

// 
export const tiers = [
  {
    name: "📜 Paper hackathon",
    id: "paper",
    href: "/subscriptions/create-guidl",
    price: { oneoff: 1500 },
    description:
      "Fully equipped with all the basics to launch your hackathon with ease.",
    features: [
      "Beautiful hackathon landing page",
      "Manage hackathon tracks & challenges",
      "Custom FAQ and event calendar",
      "On platform judging among your team",
      "Automated emails for participants",
      "Up to 10 guidl members",
    ],
    mostPopular: false,
  },
  {
    name: "💎 Diamond hackathon",
    id: "diamond",
    href: "/subscriptions/create-guidl",
    price: { oneoff: 15000 },
    description:
      "Power your hackathon with advanced collaboration, comprehensive tools and support.",
    features: [
      "Everything in paper hackathon",
      "Invite co-sponsors",
      "Invite unlimited external judges",
      "Custom payout tokens",
      "Gate your hackathon with allow-list",
      "Dedicated support/account manager",
    ],
    mostPopular: true,
    featured: true,
  },
];

export const sections = [
  {
    name: "",
    features: [
      {
        name: "# Guidl members",
        tiers: {
          [tiers[0].name]: "10",
          [tiers[1].name]: "10",
        },
      },
      {
        name: "Co-sponsors",
        tiers: {
          [tiers[0].name]: false,
          [tiers[1].name]: true,
        },
      },
      {
        name: "Invite external judges",
        tiers: { [tiers[0].name]: false, [tiers[1].name]: true },
      },
      {
        name: "Prize tag on custom network/tokens",
        tiers: { [tiers[0].name]: false, [tiers[1].name]: true },
      },
      {
        name: "Access to participant info",
        tiers: { [tiers[0].name]: false, [tiers[1].name]: true },
      },
      {
        name: "In-person functionality (allow-list)",
        tiers: { [tiers[0].name]: false, [tiers[1].name]: true },
      },
      {
        name: "Account Manager",
        tiers: { [tiers[0].name]: false, [tiers[1].name]: true },
      },
    ],
  },
];