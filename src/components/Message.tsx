import React from "react";
interface MessageProps {
  children: React.ReactNode;
  type: "question" | "answer";
}

const Message = ({ children, type }: MessageProps) => {
  return (
    <>
      {type == "question" ? (
        <div className="question">{children}</div>
      ) : (
        <div className="answer">{children}</div>
      )}
    </>
  );
};

export default Message;
