logo

GitHub
Program lifecycle
Deno supports browser compatible lifecycle events: load and unload. You can use these events to provide setup and cleanup code in your program.

Listeners for load events can be asynchronous and will be awaited. Listeners for unload events need to be synchronous. Both events cannot be cancelled.

Example:

main.ts

import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in event handler (main)`);
};

window.addEventListener("load", handler);

window.addEventListener("unload", handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload function (main)`);
};

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload function (main)`);
};

console.log("log from main script");
