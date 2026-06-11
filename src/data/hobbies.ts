export interface Hobby {
  title: string;
  description: string;
  url?: string;
  urlLabel?: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Motovlog",
    description:
      "Sharing rides, road trips, and motorcycle experiences through vlogs. Exploring routes and capturing the journey on two wheels.",
    url: "https://www.youtube.com/@Brijesh_Ritz",
    urlLabel: "YouTube Channel",
  },
  {
    title: "Photography",
    description:
      "Street and travel photography. Capturing candid moments, urban landscapes, and everyday scenes through the lens.",
    url: "https://www.pexels.com/@brijeshritz",
    urlLabel: "Pexels Profile",
  },
];
