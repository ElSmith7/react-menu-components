import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoEye } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success outline onClick={handleClick} className="mb-5">
          <GoBell />
          Hello!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          <GoCloudDownload />
          Buy Now
        </Button>
      </div>
      <div>
        <Button danger>
          <GoEye />
          See Deal
        </Button>
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
export default ButtonPage;
