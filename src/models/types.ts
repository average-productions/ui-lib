export type status =
  | "disabled"
  | "pending"
  | "error"
  | "success"
  | "warning"
  | "default";

export type mediaName =
  | "mobile"
  | "landscape"
  | "tablet"
  | "desktop"
  | "desktop-plus"
  | "wide"
  | "super";

export enum MediaName {
  MOBILE = "mobile",
  LANDSCAPE = "landscape",
  TABLET = "tablet",
  DESKTOP = "desktop",
  DESKTOP_PLUS = "desktop-plus",
  WIDE = "wide",
  SUPER = "super",
}
