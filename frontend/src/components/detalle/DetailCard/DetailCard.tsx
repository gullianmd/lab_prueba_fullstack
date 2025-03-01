import { useState } from 'react';
import Image from 'next/image';
import pokeStore from "@/store/pokeStore";
import Loading from '@/components/common/Loading/Loading';

type DetailCardArgs = {
  id: string
  image: string
  title: string
}

export default function DetailCard({ id, image, title }: DetailCardArgs) {

  const { cardDetail, getCardDetail } = pokeStore();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setisImageLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setisImageLoaded(true);
  };

  const openModal = async () => {
    getCardDetail(id);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=''>

      <div className="flex flex-col items-center" onClick={openModal}>

        <Image
          alt={title}
          src={image}
          height={100}
          width={100}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>

      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-12" onClick={closeModal}>
          <div
            className="flex flex-col items-center bg-white rounded-lg shadow-xl w-11/12 md:w-1/3 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              {!isImageLoaded && <Loading />}
              <Image
                alt={title}
                src={image}
                onLoad={handleLoadingComplete}
                height={350}
                width={350}
              />
            </div>
            <div>
              <DetailList cardDetail={cardDetail} />
            </div>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


function DetailList({ cardDetail }: { cardDetail: CardType | null }) {
  return (
    <div className='flex flex-col'>
      <div className='text-center text-xl font-bold'>{cardDetail?.name} (#{cardDetail?.number})</div>
      <ul className="space-y-1 text-gray-500 list-inside">
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Rarity : {cardDetail?.rarity || "Sin información"}
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Type : {cardDetail?.types || "Sin información"}
        </li>
        <li className="flex items-center">
          <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Subtype :  {cardDetail?.subtypes || "Sin información"}
        </li>
      </ul>
    </div>
  );
}