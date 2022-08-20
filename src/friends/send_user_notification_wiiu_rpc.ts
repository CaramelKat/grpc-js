/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "friends";

export interface SendUserNotificationWiiURequest {
  pid: number;
  notificationData: Uint8Array;
}

function createBaseSendUserNotificationWiiURequest(): SendUserNotificationWiiURequest {
  return { pid: 0, notificationData: new Uint8Array() };
}

export const SendUserNotificationWiiURequest = {
  encode(
    message: SendUserNotificationWiiURequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    if (message.notificationData.length !== 0) {
      writer.uint32(18).bytes(message.notificationData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SendUserNotificationWiiURequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendUserNotificationWiiURequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pid = reader.uint32();
          break;
        case 2:
          message.notificationData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendUserNotificationWiiURequest {
    return {
      pid: isSet(object.pid) ? Number(object.pid) : 0,
      notificationData: isSet(object.notificationData)
        ? bytesFromBase64(object.notificationData)
        : new Uint8Array(),
    };
  },

  toJSON(message: SendUserNotificationWiiURequest): unknown {
    const obj: any = {};
    message.pid !== undefined && (obj.pid = Math.round(message.pid));
    message.notificationData !== undefined &&
      (obj.notificationData = base64FromBytes(
        message.notificationData !== undefined
          ? message.notificationData
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<SendUserNotificationWiiURequest>
  ): SendUserNotificationWiiURequest {
    const message = createBaseSendUserNotificationWiiURequest();
    message.pid = object.pid ?? 0;
    message.notificationData = object.notificationData ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
