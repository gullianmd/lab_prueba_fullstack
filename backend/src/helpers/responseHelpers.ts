import { Response } from "express"

export const success = <T>(res : Response, data: T[]) => res.send({
    status: true,
    msg: "Consulta exitosa",
    data
})

export const successWithToken = <T>(res : Response, token : string) => res.send({
    status: true,
    msg: "Consulta exitosa",
    token
})

export const successWithNoData = (res : Response) => res.send({
    status: true,
    msg: "No se han encontrado registros en la consulta",
    data : []
})

export const forbidden = <T>(res : Response) => (res.sendStatus(403))

export const error = <T>(res : Response, data?: T[]) => {

    if (data) {
        return res.send({
            status: false,
            msg: "Error en consulta",
            data
        })
    }

    return res.send({
        status: false,
        msg: "Error en consulta",
    })
}