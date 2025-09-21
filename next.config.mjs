/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/Ayoub Labit CV DÉVELOPPEUR-WEB-FULL STACK.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Ayoub_Labit_CV_DEVELOPPEUR_WEB_FULL_STACK.pdf"',
          },
        ],
      },
    ];
  },
}

export default nextConfig
