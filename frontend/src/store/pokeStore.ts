import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { firstLoad, getCardDetail, getSetDetail } from '@/helpers/storeHelpers';

const pokeStore = setStoreByEnv();

function setStoreByEnv() {

  const ENV = process.env.NODE_ENV;

  const storeConfig = (set: ZustandSet<PokeStore>) : PokeStore => (
    {
      sets : null,
      setDetail : null,
      cardDetail : null,
      getSetDetail : (setId : string) => getSetDetail(set, setId),
      getCardDetail : (cardId : string) => getCardDetail(set, cardId),
      firstLoad : () => firstLoad(set)
    }
  );

  if (ENV === "production") return create<PokeStore>(set => storeConfig(set));

  return create(devtools<PokeStore>((set) => storeConfig(set)));

}


export default pokeStore;