export default function getBaseURL() {
  return process.env.VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL;
}
