export const testimonials = [
  {
    content:
      "“What I enjoy most about buidlbox is the seamlessly integrated platform that handles everything from registration to prizes to community engagement. This allows me to fully immerse in hacking rather than fuss with logistics. I also appreciate that buidlbox surfaces hackathons aligned with my interests.”",
    name: "Vansh",
    role: "Full-stack Developer",
    avatarUrl: "/vansh-pfp.png",
    id: 11,
  },
  {
    content:
      "“The buidlbox team is easily approachable, listens to feedback, and improves the product based on your feedback. I not only look forward to using buidlbox again to participate in future hackathons, but I would like to host my own hackathon on their platform too. ”",
    name: "humptycalderon",
    role: "founder at mosaic",
    avatarUrl: "/humptycalderon-pfp.jpeg",
    id: 22,
  },
  {
    content:
      "“I recently participated in the inaugural Permissionless II Hackathon and had an excellent experience. The event itself was great for hackers, but the buidlbox platform made things especially smooth and straightforward when it came to creating a team and submitting a project. I really look forward to using buidlbox again at a future hackathon!”",
    name: "travcrypto",
    role: "Marketing",
    avatarUrl:
      "https://cdn.buidlbox.io/user/19718d4d-a82f-4b16-b4e7-9410f7c4e88d/avatar/avatar.JPG?t=1697105741898",
    id: 33,
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

export const hackathons = [
  {
    hackathonId: "1",
    hackathonName: "BUIDLEra",
    sponsor: "zkSync Era",
    sponsorLogo: "/zksync-logo.jpg",
    hackathonLogo: "/zksync-logo.jpg",
    prizes: "42,000",
    projects: 55,
    participants: 207,
    link: "https://app.buidlbox.io/zksync/zksync-buidlera",
  },
  {
    hackathonId: "2",
    hackathonName: "ETHDenver 2023",
    sponsor: "ETHDenver",
    sponsorLogo: "/ethdenver-logo.jpg",
    hackathonLogo: "/ethdenver-hack-logo.png",
    prizes: "1,23M",
    projects: 426,
    participants: 972,
    link: "https://app.buidlbox.io/ethdenver/ethdenver-2023",
  },
  {
    hackathonId: "3",
    hackathonName: "Permissionless II",
    sponsor: "Blockworks",
    sponsorLogo: "/blockworks-logo.jpg",
    hackathonLogo: "/permissionless-logo.png",
    prizes: "63,500",
    projects: 53,
    participants: 153,
    link: "https://app.buidlbox.io/blockworks/permissionless-ii",
  },
  {
    hackathonId: "4",
    hackathonName: "Fund Public Goods",
    sponsor: "Funding the Commons",
    sponsorLogo: "funding-the-commons-logo.png",
    hackathonLogo: "fund-public-goods-logo.png",
    prizes: "99,700",
    projects: 116,
    participants: 431,
    link: "https://app.buidlbox.io/ftc/fund-public-goods",
  },
];
