declare type SetType = {
    id: string
    name: string
    series: string
    printed_total: number
    total: number
    ptcgo_code: string
    release_date: string
    updated_at: string
    symbol_url: string
    logo_url: string
}

declare type CardType = {
    id: string
    name: string
    supertype: string
    subtypes: string[]
    types: string[]
    set_id: string
    number: string
    rarity: string
  }