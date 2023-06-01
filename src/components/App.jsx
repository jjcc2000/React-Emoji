import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function CreateEntry(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className='h1'>Emojipedia</h1>
      <dl className='dictionary'>{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
