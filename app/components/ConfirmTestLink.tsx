"use client";

type ConfirmTestLinkProps = {
  label?: string;
  className?: string;
};

export default function ConfirmTestLink({
  label = "もう一度診断する",
  className = "",
}: ConfirmTestLinkProps) {
  return (
    <a
      href="/test"
      onClick={(event) => {
        const ok = window.confirm("本当にもう一度診断しますか？");
        if (!ok) {
          event.preventDefault();
        }
      }}
      className={className}
    >
      {label}
    </a>
  );
}