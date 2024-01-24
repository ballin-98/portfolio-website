export type projectCardData = {
  title: string;
  description: string;
  image: string;
  // tags can be optional for now
  tags: TagDto[];
};

export type TagDto = {
  title: string;
  showTag: boolean;
};

import { allTags } from "./data/tagData";

export const projectList: projectCardData[] = [
  {
    title: "project 1",
    description: "description 1",
    image: "/assets/p2.jpg",
    tags: [{ title: "C#", showTag: true }],
  },
  {
    title: "project 2",
    description: "description 2",
    image: "/assets/p3.jpg",
    tags: [{ title: "Vue", showTag: true }],
  },
  {
    title: "project 3",
    description: "description 3",
    image: "/assets/p4.jpg",
    tags: [{ title: "React", showTag: true }],
  },
  {
    title: "project 4",
    description: "description 4",
    image: "/assets/p5.jpg",
    tags: allTags.slice(4, 5),
  },
  {
    title: "project 5",
    description: "description 5",
    image: "/assets/p2.jpg",
    tags: allTags.slice(12, 14),
  },
  {
    title: "project 6",
    description: "description 6",
    image: "/assets/p3.jpg",
    tags: allTags.slice(2, 3),
  },
  {
    title: "project 7",
    description: "description 7",
    image: "/assets/p4.jpg",
    tags: allTags.slice(5, 9),
  },
];
