import type { ParsedContent } from "@nuxt/content";

export interface ContentDir {
  path: string,
  children: (ContentDir | ParsedContent)[]
}