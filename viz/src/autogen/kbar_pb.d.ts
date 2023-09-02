import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class SymbolList extends jspb.Message {
  getSymbolList(): Array<string>;
  setSymbolList(value: Array<string>): SymbolList;
  clearSymbolList(): SymbolList;
  addSymbol(value: string, index?: number): SymbolList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolList.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolList): SymbolList.AsObject;
  static serializeBinaryToWriter(message: SymbolList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolList;
  static deserializeBinaryFromReader(message: SymbolList, reader: jspb.BinaryReader): SymbolList;
}

export namespace SymbolList {
  export type AsObject = {
    symbolList: Array<string>,
  }
}

export class KBarRequest extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): KBarRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KBarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KBarRequest): KBarRequest.AsObject;
  static serializeBinaryToWriter(message: KBarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KBarRequest;
  static deserializeBinaryFromReader(message: KBarRequest, reader: jspb.BinaryReader): KBarRequest;
}

export namespace KBarRequest {
  export type AsObject = {
    symbol: string,
  }
}

export class KBarRow extends jspb.Message {
  getSymbol(): string;
  setSymbol(value: string): KBarRow;

  getTradeDate(): string;
  setTradeDate(value: string): KBarRow;

  getPreClose(): number;
  setPreClose(value: number): KBarRow;
  hasPreClose(): boolean;
  clearPreClose(): KBarRow;

  getOpenPrice(): number;
  setOpenPrice(value: number): KBarRow;
  hasOpenPrice(): boolean;
  clearOpenPrice(): KBarRow;

  getHightPrice(): number;
  setHightPrice(value: number): KBarRow;
  hasHightPrice(): boolean;
  clearHightPrice(): KBarRow;

  getLowPrice(): number;
  setLowPrice(value: number): KBarRow;
  hasLowPrice(): boolean;
  clearLowPrice(): KBarRow;

  getClosePrice(): number;
  setClosePrice(value: number): KBarRow;
  hasClosePrice(): boolean;
  clearClosePrice(): KBarRow;

  getChange(): number;
  setChange(value: number): KBarRow;
  hasChange(): boolean;
  clearChange(): KBarRow;

  getPctChange(): number;
  setPctChange(value: number): KBarRow;
  hasPctChange(): boolean;
  clearPctChange(): KBarRow;

  getVolume(): number;
  setVolume(value: number): KBarRow;
  hasVolume(): boolean;
  clearVolume(): KBarRow;

  getAmount(): number;
  setAmount(value: number): KBarRow;
  hasAmount(): boolean;
  clearAmount(): KBarRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KBarRow.AsObject;
  static toObject(includeInstance: boolean, msg: KBarRow): KBarRow.AsObject;
  static serializeBinaryToWriter(message: KBarRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KBarRow;
  static deserializeBinaryFromReader(message: KBarRow, reader: jspb.BinaryReader): KBarRow;
}

export namespace KBarRow {
  export type AsObject = {
    symbol: string,
    tradeDate: string,
    preClose?: number,
    openPrice?: number,
    hightPrice?: number,
    lowPrice?: number,
    closePrice?: number,
    change?: number,
    pctChange?: number,
    volume?: number,
    amount?: number,
  }

  export enum PreCloseCase { 
    _PRE_CLOSE_NOT_SET = 0,
    PRE_CLOSE = 3,
  }

  export enum OpenPriceCase { 
    _OPEN_PRICE_NOT_SET = 0,
    OPEN_PRICE = 4,
  }

  export enum HightPriceCase { 
    _HIGHT_PRICE_NOT_SET = 0,
    HIGHT_PRICE = 5,
  }

  export enum LowPriceCase { 
    _LOW_PRICE_NOT_SET = 0,
    LOW_PRICE = 6,
  }

  export enum ClosePriceCase { 
    _CLOSE_PRICE_NOT_SET = 0,
    CLOSE_PRICE = 7,
  }

  export enum ChangeCase { 
    _CHANGE_NOT_SET = 0,
    CHANGE = 8,
  }

  export enum PctChangeCase { 
    _PCT_CHANGE_NOT_SET = 0,
    PCT_CHANGE = 9,
  }

  export enum VolumeCase { 
    _VOLUME_NOT_SET = 0,
    VOLUME = 10,
  }

  export enum AmountCase { 
    _AMOUNT_NOT_SET = 0,
    AMOUNT = 11,
  }
}

export class KBarResponse extends jspb.Message {
  getItemList(): Array<KBarRow>;
  setItemList(value: Array<KBarRow>): KBarResponse;
  clearItemList(): KBarResponse;
  addItem(value?: KBarRow, index?: number): KBarRow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KBarResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KBarResponse): KBarResponse.AsObject;
  static serializeBinaryToWriter(message: KBarResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KBarResponse;
  static deserializeBinaryFromReader(message: KBarResponse, reader: jspb.BinaryReader): KBarResponse;
}

export namespace KBarResponse {
  export type AsObject = {
    itemList: Array<KBarRow.AsObject>,
  }
}

