const basePath = process.env.NODE_ENV === "production" ? "/osprey-cooling-website" : "";

export function imgPath(path: string): string {
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}
