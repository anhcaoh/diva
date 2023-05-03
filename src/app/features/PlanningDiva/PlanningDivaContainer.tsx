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
      let alive;
      do {
        alive = await fetchLiveness();
        alive !== "alive" && fetchLogin();
        alive === "alive" && setLiveness(true);
      } while (alive !== "alive");
    }
    async function sendSlackMessage(text: string) {
      let responseMsg;
      do {
        responseMsg = await postSlackMessage(text);
        responseMsg?.message?.includes("expired")
          ? fetchLogin()
          : setResponse(responseMsg);
      } while (responseMsg?.message?.includes("expired"));
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
