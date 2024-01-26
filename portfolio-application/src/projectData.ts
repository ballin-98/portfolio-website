export type projectCardData = {
  title: string;
  description: string;
  image: string;
  // tags can be optional for now
  tags: TagDto[];
  index: number;
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
    index: 0,
  },
  {
    title: "project 2",
    description: "description 2",
    image: "/assets/p3.jpg",
    tags: [{ title: "Vue", showTag: true }],
    index: 1,
  },
  {
    title: "project 3",
    description: "description 3",
    image: "/assets/p4.jpg",
    tags: [{ title: "React", showTag: true }],
    index: 2,
  },
  {
    title: "project 4",
    description: "description 4",
    image: "/assets/p5.jpg",
    tags: allTags.slice(4, 5),
    index: 3,
  },
  {
    title: "project 5",
    description: "description 5",
    image: "/assets/p2.jpg",
    tags: allTags.slice(12, 14),
    index: 4,
  },
  {
    title: "project 6",
    description: "description 6",
    image: "/assets/p3.jpg",
    tags: allTags.slice(2, 3),
    index: 5,
  },
  {
    title: "project 7",
    description: "description 7",
    image: "/assets/p4.jpg",
    tags: allTags.slice(5, 9),
    index: 6,
  },
];
