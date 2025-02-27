import { Request, Response } from "express";
import * as responseHelpers from "../helpers/responseHelpers"
import { getCardDetailById } from "../models/cardModel";

export const getCardDetail = async (req : Request, res : Response) => {

    const {id} = req.params

    const result = await getCardDetailById(id)

    if (!result) return responseHelpers.error(res)

    if (result.length === 0) return responseHelpers.successWithNoData(res)

    return responseHelpers.success(res, result)

}