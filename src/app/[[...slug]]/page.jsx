"use client";
import store from "../../store/store.js";
import { Provider } from "react-redux";

import dynamic from "next/dynamic";

const App = dynamic(() => import("../../App"), { ssr: false });

export default function Page() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
