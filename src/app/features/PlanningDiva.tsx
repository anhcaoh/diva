import Button from "../components/Button";
import DataDisplay from "../components/DataDisplay";
import Input from "../components/Input";

const PlanningDiva = () => {
  return (
    <div>
      <Button>Check status</Button>
      <div>
        <Input placeholder="Enter something" />
        <Button>Send</Button>
        <DataDisplay data={{ message: "hello" }} error={"world"} />
      </div>
    </div>
  );
};
export default PlanningDiva;
