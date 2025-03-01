export default function Loading() {
  return (
    <div className="w-full h-full p-1 rounded flex items-center justify-center animate-pulse">
      <div className="p-1 text-base font-medium leading-none text-gray-800 rounded-sm animate-pulse">
        Cargando...
      </div>
    </div>
  );
}
