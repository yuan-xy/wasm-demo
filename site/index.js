const js = import("./node_modules/@yuan_xy/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});

