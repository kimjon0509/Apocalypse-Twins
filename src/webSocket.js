import * as io from "socket.io-client";

const ENDPOINT = "http://localhost:3001";
const webSocket = io.connect(ENDPOINT)

export {webSocket};