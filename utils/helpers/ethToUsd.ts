import { currencyToNumber } from './currencyToNumber'
import { numberToCurrency } from './numberToCurrency'
import { split } from 'ramda'

export const ethToUsd = (ethAmount: string, ethPrice: string) => {
    const ethAmountNumber = Number(split(' ', ethAmount)[0])
    const ethPriceNumber = currencyToNumber(ethPrice)

    console.log('ethAmountNumber', ethAmountNumber)
    console.log('ethPrice', ethPrice)
    console.log('ethPriceNumber', ethPriceNumber)

    return numberToCurrency(ethAmountNumber * ethPriceNumber)
}
