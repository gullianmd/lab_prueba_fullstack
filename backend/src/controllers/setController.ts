import { Request, Response } from "express";
import { selectAllSet } from "../models/setModel";
import * as responseHelpers from "../helpers/responseHelpers"
import { getAllCardsBySet } from "../models/cardModel";

export const getAllSet = async (req : Request, res : Response) => {

    const result = await selectAllSet()

    if (!result) return responseHelpers.error(res)

    if (result.length === 0) return responseHelpers.successWithNoData(res)

    return responseHelpers.success(res, result)

}

export const getCardsFromSet = async (req : Request, res : Response) => {

    const {id} = req.params

    const result = await getAllCardsBySet(id)

    if (!result) return responseHelpers.error(res)

    if (result.length === 0) return responseHelpers.successWithNoData(res)

    return responseHelpers.success(res, result)

}