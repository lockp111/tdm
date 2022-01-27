/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "lockp111.tdm.tdm";
const baseMsgDeposit = {
    creator: "",
    chainID: "",
    transferInHash: "",
    tokenAddress: "",
    amount: "",
    from: "",
    to: "",
    gas: "",
};
export const MsgDeposit = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.chainID !== "") {
            writer.uint32(18).string(message.chainID);
        }
        if (message.transferInHash !== "") {
            writer.uint32(26).string(message.transferInHash);
        }
        if (message.tokenAddress !== "") {
            writer.uint32(34).string(message.tokenAddress);
        }
        if (message.amount !== "") {
            writer.uint32(42).string(message.amount);
        }
        if (message.from !== "") {
            writer.uint32(50).string(message.from);
        }
        if (message.to !== "") {
            writer.uint32(58).string(message.to);
        }
        if (message.gas !== "") {
            writer.uint32(66).string(message.gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeposit };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.chainID = reader.string();
                    break;
                case 3:
                    message.transferInHash = reader.string();
                    break;
                case 4:
                    message.tokenAddress = reader.string();
                    break;
                case 5:
                    message.amount = reader.string();
                    break;
                case 6:
                    message.from = reader.string();
                    break;
                case 7:
                    message.to = reader.string();
                    break;
                case 8:
                    message.gas = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = String(object.chainID);
        }
        else {
            message.chainID = "";
        }
        if (object.transferInHash !== undefined && object.transferInHash !== null) {
            message.transferInHash = String(object.transferInHash);
        }
        else {
            message.transferInHash = "";
        }
        if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
            message.tokenAddress = String(object.tokenAddress);
        }
        else {
            message.tokenAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = String(object.gas);
        }
        else {
            message.gas = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainID !== undefined && (obj.chainID = message.chainID);
        message.transferInHash !== undefined &&
            (obj.transferInHash = message.transferInHash);
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = message.tokenAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        message.from !== undefined && (obj.from = message.from);
        message.to !== undefined && (obj.to = message.to);
        message.gas !== undefined && (obj.gas = message.gas);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeposit };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainID !== undefined && object.chainID !== null) {
            message.chainID = object.chainID;
        }
        else {
            message.chainID = "";
        }
        if (object.transferInHash !== undefined && object.transferInHash !== null) {
            message.transferInHash = object.transferInHash;
        }
        else {
            message.transferInHash = "";
        }
        if (object.tokenAddress !== undefined && object.tokenAddress !== null) {
            message.tokenAddress = object.tokenAddress;
        }
        else {
            message.tokenAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = "";
        }
        return message;
    },
};
const baseMsgDepositResponse = {};
export const MsgDepositResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDepositResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDepositResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Deposit(request) {
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("lockp111.tdm.tdm.Msg", "Deposit", data);
        return promise.then((data) => MsgDepositResponse.decode(new Reader(data)));
    }
}
