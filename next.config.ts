import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPagesRepo = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserPagesRepo ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
