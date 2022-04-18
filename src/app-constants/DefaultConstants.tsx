import {
  BeakerIcon,
  CakeIcon,
  FireIcon,
  FilmIcon,
  FingerPrintIcon,
  HomeIcon,
  MusicNoteIcon,
  PuzzleIcon,
} from "@heroicons/react/solid";

import { CategoryCardItem } from "types";

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: <FingerPrintIcon /> },
  { name: "Movies", icon: <FilmIcon /> },
  { name: "Gaming", icon: <PuzzleIcon /> },
  { name: "Sport", icon: <FireIcon /> },
  { name: "Food", icon: <CakeIcon /> },
  { name: "Education", icon: <BeakerIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Home", icon: <HomeIcon /> },
];
