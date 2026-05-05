/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Добавьте это, если деплоите в подпапку репозитория:
  // basePath: '/имя-вашего-репозитория',
};

export default nextConfig;
