import { LiveEditor, LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";

export const CodeEditor = ({
  code,
  isDisabled = true,
}: {
  code: string;
  isDisabled?: boolean;
}) => {
  return (
    <LiveProvider theme={themes.shadesOfPurple} code={code}>
      <LiveEditor disabled={isDisabled} />
    </LiveProvider>
  );
};
