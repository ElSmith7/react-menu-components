import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success outline>
          Hello!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger>See Deal</Button>
      </div>
      <div>
        <Button secondary outline rounded>
          Hide Adds
        </Button>
      </div>
      <div>
        <Button warning>Delete Basket</Button>
      </div>
    </div>
  );
}
export default App;
