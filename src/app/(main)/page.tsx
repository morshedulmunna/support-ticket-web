import { jwtToken } from "@/utils/jwtToken";

export default function Home() {
  const token = jwtToken();

  return (
    <main>
      <div className="flex h-[100vh] items-center justify-center">
        <p>Company Landing Page coming soon....</p>
      </div>
    </main>
  );
}
