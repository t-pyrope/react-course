import { LiveEditor, LivePreview, LiveProvider } from "react-live";

export const CodePreview = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code}>
      <div style={{ display: "grid", gridTemplateColumns: "0 100%" }}>
        <div style={{ width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
          <LiveEditor />
        </div>
        <LivePreview />
      </div>
    </LiveProvider>
  );
};
