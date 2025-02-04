import { useState } from "react";
import ExpandedMenu from "./components/ExpandedMenu";

function App() {
  const [menuClicked, setmenuClicked] = useState(false);

  function handleMenuClicked() {
    setmenuClicked(!menuClicked);
    console.log(menuClicked);
  }

  return (
    <>
      <ExpandedMenu toggle={menuClicked} />
      <div className="flex h-[100vh] w-[100vw] items-center justify-center">
        <button
          onClick={handleMenuClicked}
          className="border border-black p-2.5 text-black"
        >
          <h1>Button</h1>
        </button>
      </div>
    </>
  );
}

export default App;
