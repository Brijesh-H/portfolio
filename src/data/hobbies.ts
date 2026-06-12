export interface Hobby {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Motovlog",
    description:
      "I ride and record my journeys on YouTube. Join me as I explore roads, share riding tips, and capture the freedom of two wheels.",
    link: "https://www.youtube.com/@Brijesh_Ritz",
    linkLabel: "@Brijesh_Ritz",
  },
  {
    title: "Photography",
    description:
      "I capture moments through my lens and share them on Pexels. Free stock photos from my travels and everyday life.",
    link: "https://www.pexels.com/@brijeshritz",
    linkLabel: "@brijeshritz",
  },
];
