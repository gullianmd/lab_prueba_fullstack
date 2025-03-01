"use client";

import Loading from "@/components/common/Loading/Loading";
import DetailCard from "@/components/detalle/DetailCard/DetailCard";
import pokeStore from "@/store/pokeStore";
import { use, useEffect } from "react";

export default function DetallePage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = use(params);
  const {setDetail, getSetDetail} = pokeStore();
  
  useEffect(() => {
    getSetDetail(resolvedParams.id);
  }, [getSetDetail, resolvedParams]);

  return (
      <div className="flex flex-wrap justify-center p-6">
        {
          Array.isArray(setDetail) ? 
          setDetail.map((detail, index) => 
            <DetailCard 
              key={index}
              id={detail.id}
              image={detail.image}
              title={detail.name}
              />
          )
          :
          <Loading/>
        }
      </div>
  );
}