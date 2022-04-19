import {
  BeakerIcon,
  CakeIcon,
  // FireIcon,
  FilmIcon,
  FingerPrintIcon,
  HomeIcon,
  MusicNoteIcon,
  PuzzleIcon,
  ChipIcon,
} from "@heroicons/react/solid";
import { FaDumbbell } from "react-icons/fa";

import { CategoryCardItem } from "types";

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: <FingerPrintIcon /> },
  { name: "Streaming", icon: <FilmIcon /> },
  { name: "Gaming", icon: <PuzzleIcon /> },
  { name: "Fitness", icon: <FaDumbbell /> },
  { name: "Food", icon: <CakeIcon /> },
  { name: "Education", icon: <BeakerIcon /> },
  { name: "Music", icon: <MusicNoteIcon /> },
  { name: "Home", icon: <HomeIcon /> },
  { name: "Software", icon: <ChipIcon /> },
];
