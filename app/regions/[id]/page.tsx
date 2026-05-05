import { regionsData } from "@/src/lib/tea-data";
import RegionDetail from "@/src/components/features/RegionDetail";
import { notFound } from "next/navigation";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.keys(regionsData).map((id) => ({
    id: id,
  }));
}

export default async function RegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const region = regionsData[id];

  if (!region) {
    return (
      <div className="min-h-screen bg-paper-100 flex flex-col items-center justify-center p-8">
        <AlertCircle size={64} className="text-gold-500 mb-6" />
        <h1 className="text-4xl text-ink-950 mb-4">Регион не найден</h1>
        <p className="text-ink-950/60 mb-8">Тайны этой провинции еще не открыты нашим исследователям.</p>
        <Link 
          href="/"
          className="px-8 py-3 bg-ink-950 text-paper-100 rounded-full hover:bg-gold-600 transition-colors"
        >
          Вернуться к карте
        </Link>
      </div>
    );
  }

  return <RegionDetail region={region} />;
}
