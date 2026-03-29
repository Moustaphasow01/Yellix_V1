import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "Yellix_V1";
const isUserPagesRepo = repoName.endsWith(".github.io");

export default function createNextConfig(phase: string): NextConfig {
  const isDevelopmentServer = phase === PHASE_DEVELOPMENT_SERVER;
  const basePath = !isDevelopmentServer && repoName && !isUserPagesRepo ? `/${repoName}` : "";

  return {
    reactCompiler: true,
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
      unoptimized: true,
    },
  };
}
