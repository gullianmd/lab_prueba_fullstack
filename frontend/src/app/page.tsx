"use client";

import Loading from "@/components/common/Loading/Loading";
import CustomCard from "@/components/home/CustomCard/CustomCard";
import pokeStore from "@/store/pokeStore";
import { useEffect } from "react";

export default function Main() {

  const { sets, firstLoad } = pokeStore();

  useEffect(() => {
    firstLoad();
  }, [firstLoad]);


  return (
    <div className="flex justify-center flex-wrap gap-6 pt-6">
      {
        Array.isArray(sets) ?
          sets.map((set, index) => 
            <CustomCard 
              key={index} 
              id={set.id} 
              logo_url={set.logo_url}
              name={set.name}
              release_date={set.release_date}
              symbol_url={set.symbol_url}
              updated_at={set.updated_at}
              />
        )
        :
        <Loading/>
      }
    </div>
  );
}
