import { useState } from "react";
function Text(): JSX.Element {
  const [text, setText] = useState<boolean>(true);

  const toggleTextHandler = (): void => {
      setText(!text);
  };
  return(
    <div>
        <button onClick={toggleTextHandler}>This is the text</button>
        {/* {text?<div>{text}</div>} */}
    </div>
  )
}

