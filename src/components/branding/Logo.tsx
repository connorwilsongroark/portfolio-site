import { StaticSignature } from "./StaticSignature";

type LogoProps = {
  className?: string;
  signatureClassName?: string;
};

export function Logo({ className = "", signatureClassName = "" }: LogoProps) {
  return (
    <div
      className={[
        "bg-primary  inline-flex items-center justify-center rounded-full w-[120px] h-[70px] hover:bg-primary-hover transition duration-200",
        "px-4 py-3 shadow-sm",
        className,
      ].join(" ")}
    >
      <StaticSignature
        fill='white'
        strokeWidth={5}
        stroke='white'
        className={["absolute h-20 w-auto -rotate-12", signatureClassName].join(
          " ",
        )}
      />
    </div>
  );
}
