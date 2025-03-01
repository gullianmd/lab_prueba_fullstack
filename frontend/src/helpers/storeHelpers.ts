import { errAlert } from "@/utils/alertUtils";
import * as pokeSrv from "../services/pokeService";

export const getToken = async (): Promise<string | null> => {

  const result = await pokeSrv.login();

  const hasToken = result && result.hasOwnProperty("token");

  return hasToken ? result.token : null;

};

export const firstLoad = async (set: ZustandSet<PokeStore>) => {
  try {

    const token = await getToken();

    if (!token) throw Error("Error al obtener token de servicio");

    const sets = await pokeSrv.getAllSets(token);

    if (!sets || !sets?.status) throw Error("Error al obtener todos los mazos disponibles");

    set({
      sets: sets.data
    });

  } catch (e: unknown) {
    errAlert(e);
  }
};

export const getSetDetail = async (set: ZustandSet<PokeStore>, setId: string) => {
  try {
    const token = await getToken();

    if (!token) throw Error("Error al obtener token de servicio");

    const result = await pokeSrv.getCardsBySetId(setId, token);

    if (!result) throw Error("Error al obtener cartas del mazo");


    set({
      setDetail: result
    });

  } catch (e: unknown) {
    errAlert(e);
  }
};

export const getCardDetail = async (set: ZustandSet<PokeStore>, cardId: string) => {
  try {
    const token = await getToken();

    if (!token) throw Error("Error al obtener token de servicio");

    const result = await pokeSrv.getDetailByCardId(cardId, token);

    if (!result) throw Error("Error al obtener cartas del mazo");


    set({
      cardDetail: result
    });

  } catch (e: unknown) {
    errAlert(e);
  }
};