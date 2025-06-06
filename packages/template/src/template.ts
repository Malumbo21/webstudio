import type { JSX } from "react";
import type { WebstudioFragment } from "@webstudio-is/sdk";

export const templateCategories = [
  "general",
  "typography",
  "media",
  "animations",
  "data",
  "forms",
  "localization",
  "radix",
  "xml",
  "other",
  "hidden",
  "internal",
] as const;

export type TemplateMeta = {
  category: (typeof templateCategories)[number];
  label?: string;
  description?: string;
  icon?: string;
  order?: number;
  template: JSX.Element;
};

export type GeneratedTemplateMeta = Omit<TemplateMeta, "template"> & {
  template: WebstudioFragment;
};
