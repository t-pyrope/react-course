import { LiveEditor, LivePreview, LiveProvider } from "react-live";

export const CodeEditorWithPreview = ({ code }: { code: string }) => {
  return (
    <LiveProvider code={code}>
      <div
        style={{ display: "grid", gridTemplateColumns: "49% 49%", gap: "2%" }}
      >
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  );
};
