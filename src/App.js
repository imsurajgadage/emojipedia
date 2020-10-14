import React from "react";
import emojipedia from "./components/emojipedia.js";
import Entry from "./components/Entry.js";


function createEntry(emojiTerm){
  return(
    <Entry
      key = {emojiTerm.id}
      emoji = {emojiTerm.emoji}
      name = {emojiTerm.name}
      description = {emojiTerm.meaning}
    />
  );
}


function App() {
  return (
      <div>
            <h1>
              Emojipedia
            </h1>

    <dl className="dictionary">
      {emojipedia.map(createEntry)}

    </dl>
     </div>
  );
}

export default App;
