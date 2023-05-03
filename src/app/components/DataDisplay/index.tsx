"use client";

import { CoreComponentType } from "@/app/types";
import { ReactNode, useState } from "react";

export type IData = {
  title?: string;
  message: string | ReactNode;
};
export interface IDataDisplay extends Omit<CoreComponentType, "size"> {
  data: IData;
  error?: string;
}
// TODO: move Alert into own component
interface IAlert extends IData {
  type: "error" | "info" | "success";
  showClose?: boolean;
  className?: string;
}
export const Alert = ({
  type,
  showClose = true,
  title,
  message,
  className,
}: IAlert) => {
  const [showAlert, setShowAlert] = useState(message ? true : false);
  return (
    <>
      {showAlert && (
        <>
          {
            <div
              className={[
                type === "info"
                  ? "bg-indigo-900"
                  : type === "error"
                  ? "bg-red-900"
                  : type === "success"
                  ? "bg-green-900"
                  : "",
                " relative text-center py-4 lg:px-4",
                className,
              ]
                .join(" ")
                .trim()}
            >
              <div
                className={[
                  type === "info"
                    ? "bg-indigo-800"
                    : type === "error"
                    ? "bg-red-800"
                    : type === "success"
                    ? "bg-green-800"
                    : "",
                  "p-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",
                ]
                  .join(" ")
                  .trim()}
                role="alert"
              >
                <span
                  className={[
                    type === "info"
                      ? "bg-indigo-500"
                      : type === "error"
                      ? "bg-red-500"
                      : type === "success"
                      ? "bg-green-500"
                      : "",
                    "flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3",
                  ]
                    .join(" ")
                    .trim()}
                >
                  {title ?? "New"}
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  {message}
                </span>

                {/* <svg
                    className="fill-current opacity-75 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                  </svg> */}
              </div>
              {showClose && (
                <span
                  onClick={() => setShowAlert(!showAlert)}
                  className="absolute top-0 bottom-0 right-0 px-1 py-1"
                >
                  <svg
                    className="fill-current h-6 w-6 text-gray-400"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              )}
            </div>
          }
          {/* {(type === "error" && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">{title} &nbsp;</strong>
              <span className="block sm:inline truncate">{message}</span>
              <span
                onClick={() => setShowAlert(!showAlert)}
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )) ||
            null} */}
        </>
      )}
    </>
  );
};
const DataDisplay = ({ data, error, children }: IDataDisplay) => {
  return (
    <>
      <p>{data?.message}</p>
      {error && <Alert type="info" message={error} />}
      {children}
    </>
  );
};
export default DataDisplay;
