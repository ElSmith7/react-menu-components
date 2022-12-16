import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "dvcb",
      label: "Are Dogs cute?",
      content: "They sure are but puppies are cuter",
    },
    {
      id: "dfvb",
      label: "Are kittens cute?",
      content: "Sure but they are a bit weird, cats are cuter",
    },
    {
      id: "mvmkkd",
      label: "Are rabbits cute?",
      content:
        "On the outside rabbits my seem cute and fluffy, however they are the devil incarnate. They eat their own babies. Never trust a rabbit.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
