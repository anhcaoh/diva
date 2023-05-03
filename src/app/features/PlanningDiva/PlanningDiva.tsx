import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Button from "../../components/Button";
import { Alert } from "../../components/DataDisplay";
import Input from "../../components/Input";

export interface IPlanningDiva {
  data: {
    alive: boolean;
    response: { status: number; message: string };
  };
  actions: {
    checkApiStatus: Function;
    sendSlackMessage: Function;
  };
}
const PlanningDiva = ({
  data: { alive, response },
  actions: { checkApiStatus, sendSlackMessage },
}: IPlanningDiva) => {
  const [message, setMessage] = useState("");
  const handleOnChangeMessage = (e: ChangeEvent<HTMLInputElement>) =>
    setMessage(e.currentTarget?.value);
  const handleOnSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    message && sendSlackMessage(message);
  };
  return (
    <div>
      <Button
        onClick={() => {
          checkApiStatus();
        }}
      >
        Check API status
      </Button>{" "}
      {alive && (
        <Alert
          className="my-2 rounded-md"
          showClose={false}
          type="info"
          title="Status"
          message={alive ? "alive" : ""}
        />
      )}
      <form onSubmit={handleOnSubmitForm} className="my-4">
        <h1>
          Say{" "}
          <code>
            <i>hi</i>
          </code>{" "}
          to the team
        </h1>
        <div className="my-1">
          <Input
            onChange={handleOnChangeMessage}
            name="message"
            placeholder="Enter a message"
            className="mr-2"
          />
          <Button type="submit">Send</Button>
          {response && (
            <Alert
              className="my-2 rounded-md"
              showClose={false}
              type={
                response.status === 200
                  ? "success"
                  : response.status >= 400
                  ? "error"
                  : "info"
              }
              title={response.status >= 400 ? 'Error' : 'Status'}
              message={response.message}
            />
          )}
        </div>
      </form>
    </div>
  );
};
export default PlanningDiva;
