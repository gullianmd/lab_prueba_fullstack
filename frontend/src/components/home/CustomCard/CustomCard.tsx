import { simplifyDate } from "@/utils/dateUtils";
import Image from "next/image";

type CustomCardProps = {
  id: string,
  name: string,
  release_date: string
  updated_at: string
  symbol_url: string
  logo_url: string
}

export default function CustomCard({ id, name, release_date, updated_at, logo_url }: CustomCardProps) {
  return (
    <div className="max-w-sm p-6 bg-white border rounded-lg shadow-sm flex flex-col h-80">

      <div className="flex justify-center gap-4 text-xs text-gray-700">
        <div className="flex items-center">
          <span className="bg-gray-100 text-gray-800 font-medium px-2.5 py-0.5 rounded-sm border border-gray-500">
            Lanzamiento
          </span>
          <span className="ml-2">{simplifyDate(release_date, true)}</span>
        </div>
        <div className="flex items-center">
          <span className="bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded-sm border border-green-400">
            Actualizado el
          </span>
          <span className="ml-2">{simplifyDate(updated_at, true)}</span>
        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      <div className="flex flex-col items-center gap-2">
        <h5 className="text-2xl font-bold text-gray-900 text-center">{name} ({id})</h5>
        <Image alt="Imagen de set" src={logo_url} width={150} height={150} />
      </div>

      <div className="mt-auto flex justify-center">
        <a href={`/detalle/${id}`} className="flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700">
          Cartas del Mazo
          <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>

    </div>
  );
}
