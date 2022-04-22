import {
  HiBeaker,
  HiCake,
  HiFilm,
  HiFingerPrint,
  HiHome,
  HiMusicNote,
  HiPuzzle,
  HiChip,
  FaDumbbell,
} from "react-icons/all";

import { CategoryCardItem } from "types";

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: <HiFingerPrint /> },
  { name: "Streaming", icon: <HiFilm /> },
  { name: "Gaming", icon: <HiPuzzle /> },
  { name: "Fitness", icon: <FaDumbbell /> },
  { name: "Food", icon: <HiCake /> },
  { name: "Education", icon: <HiBeaker /> },
  { name: "Music", icon: <HiMusicNote /> },
  { name: "Home", icon: <HiHome /> },
  { name: "Software", icon: <HiChip /> },
];
