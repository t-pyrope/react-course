import { LiveEditor, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";

export const JustCode = ({ code }: { code: string }) => {
  return (
    <LiveProvider theme={themes.vsLight} code={code}>
      <LiveEditor disabled />
    </LiveProvider>
  );
};
