const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!path) {
    return publicBasePath || "/";
  }

  return `${publicBasePath}${path.startsWith("/") ? path : `/${path}`}`;
}
