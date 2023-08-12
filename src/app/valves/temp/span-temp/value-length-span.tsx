import { RequireSpan } from "app/valves/temp/span-temp/require-span";

export function ValueLengthSpan({ value, condition, isValid,
  must, errors, id }) {
  return (
    <>
      <span >
        <RequireSpan must={must} type={errors[id]?.type} />
        {value.length > 0 ?
          <span className={`condition ${isValid ? 'success' : 'error'}`}>{condition}</span>
          :
          <span className="condition">{" "}</span>
        }
      </span>
    </>
  )
}
