import type { SwitchProps } from "@/types/switch";

const Switch = ({
  checked,
  onChange,
  disabled = false,
  label,
}: SwitchProps) => {
  return (
    <label className={`inline-flex items-center gap-2.5 ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"} select-none`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={`
          relative
          inline-flex
          h-6
          w-11
          shrink-0
          items-center
          rounded-full
          p-0.5
          transition-colors
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-(--color-primary)/20
          disabled:cursor-not-allowed
          ${checked ? "bg-(--color-secondary)" : "bg-(--color-disable)"}
        `}
      >
        <span
          className={`
            h-5
            w-5
            rounded-full
            bg-(--color-text-inverse)
            shadow-xs
            transition-transform
            duration-200
            ${checked ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>

      {label && (
        <span className="text-sm font-(--font-weight-medium) text-(--color-text-primary)">
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;