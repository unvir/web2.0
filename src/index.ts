
import load from "./app";

load();

if (module.hot) {
  module.hot.accept("./app.jsx", () => {
    load();
  });
}