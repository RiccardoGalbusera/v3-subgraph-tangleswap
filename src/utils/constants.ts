/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0xdf7bA717FB0D5ce579252f05167cD96d0fA77bCb'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

export let POOL_ADDRESSES: string[] = [
  '0xa0e105b9300cfa9564126a705d6e5bc9e05de618',
  '0x9522f7bf80d2c51d6359931eddf32cfc09ae15de',
  '0xb12f5acacc2a7827a59ee1de0dcfd6f2fdb4e6ac',
  '0xef668c0ed3b535f0f8136ae1a8ce54993376b5e9',
  '0x2aefc64d495209160861dbcf903be43633b8f16a',
  '0x99347fef09d76cb14295f15ba45665d40a63f52f',
  '0x6286ddff33cd7d53d885f52ea08bee943c765479',
  '0x143a657e5ed2f5df2af25e2966b8cb754a8a26db',
  '0x6ce378e310525e55656ec1474052824035ce441c',
  '0xe17662315e98e3c6985bebb2334aefc334252c57',
  '0x937a0457e665205fea19f14bd23cf1fc8cf98257',
  '0xfe3f65d157c53e40f7b11df53496ec55fe966854',
  '0xa2aad6cf6214e2bf54224a260258933933311530',
  '0x31aeaf482be6035392c49db960589fe1bb0fdf34',
  '0x58a4684345a819b1246dc648f80f52da9d932269',
  '0xcf13aef27441f4d19e7f7149d3ca3fb3be39afdd',
  '0x32543798b108bfcf95bc60af6111f01155b262d6',
  '0xf56f51a3bfd44de9810acdc1d91cd307e3b8d483',
  '0xc6bf421e982648690070330e4664bd4876719493',
  '0xcef88b5e67152a7a8c0840129d33e6912e4c7e4e',
  '0x5d5c172ca2ae09ba5204af377be192bec880dac4'
]
