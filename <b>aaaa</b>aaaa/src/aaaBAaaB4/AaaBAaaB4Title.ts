import { AaaBAaaB4 as TAaaBAaaB4 } from "../api/aaaBAaaB4/AaaBAaaB4";

export const AAABAAAB4_TITLE_FIELD = "id";

export const AaaBAaaB4Title = (record: TAaaBAaaB4): string => {
  return record.id || String(record.id);
};
