export interface TeamMember {
  id: string;
  name: string;
  role: string;
  responsibility: string;
  photoUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ariz Azadli",
    role: "Backend Developer",
    responsibility: "System and data architecture.",
    photoUrl: "/team/ariz.png"
  },
  {
    id: "2",
    name: "Murad Huseynov",
    role: "ML Engineer",
    responsibility: "AI and anomaly detection.",
    photoUrl: "/team/murad.png"
  },
  {
    id: "3",
    name: "Kanan Shukurzade",
    role: "Backend & Frontend Developer",
    responsibility: "Core systems and UI.",
    photoUrl: "/team/kanan.png"
  },
  {
    id: "4",
    name: "Aytaj Sadigova",
    role: "Researcher",
    responsibility: "Data and environmental research.",
    photoUrl: "/team/aytaj.png"
  },
  {
    id: "5",
    name: "Rufat Jabrailli",
    role: "Chemical Engineer",
    responsibility: "Sorbent and materials research.",
    photoUrl: "/team/rufat.png"
  },
  {
    id: "6",
    name: "Shikhi Ibrahimov",
    role: "Full Stack Developer",
    responsibility: "End-to-end system development.",
    photoUrl: "/team/shikhi.png"
  }
];
