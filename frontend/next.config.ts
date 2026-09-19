import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    output: "export",
    allowedDevOrigins: ["wails.localhost"]
};

export default nextConfig;
