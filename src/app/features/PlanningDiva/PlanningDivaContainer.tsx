"use client";
import { useState } from "react";
import { fetchLiveness, fetchLogin, postSlackMessage } from "./api";

// Planning Diva wrapper contains business logics cross communciation with API
const withPlanningDiva = (Component: any) => {
  function XComponent(props: any) {
    const [alive, setLiveness] = useState<boolean | null>(null);
    const [response, setResponse] = useState<{
      status: number;
      message: string;
    } | null>(null);
    async function checkApiStatus() {
      let liveness;
      do {
        liveness = await fetchLiveness();
        liveness !== "alive" && fetchLogin();
        liveness === "alive" && setLiveness(true);
      } while (alive === false);
    }
    async function sendSlackMessage(text: string) {
      const responseMsg = await postSlackMessage(text);
      if (responseMsg) setResponse(responseMsg);
      // let responseMsg;
      // do {
      //   responseMsg = await postSlackMessage(text);
      //   responseMsg?.message?.includes("expired")
      //     ? fetchLogin()
      //     : setResponse(responseMsg);
      // } while (responseMsg?.message?.includes("expired"));
    }
    return (
      <Component
        {...props}
        data={{ alive, response }}
        actions={{ checkApiStatus, sendSlackMessage }}
      />
    );
  }
  return XComponent;
};
export default withPlanningDiva;
